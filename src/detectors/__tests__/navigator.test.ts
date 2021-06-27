import { DetectorOptions } from '../../types';
import NavigatorDetector from '../navigator';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: '',
  lookupSessionStorage: '',
  order: [],
};

test('should return lang when match', () => {
  jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['cn-zh']);
  jest.spyOn(navigator, 'language', 'get').mockReturnValue('cn');

  expect(NavigatorDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toEqual([
    'cn-zh',
    'cn',
  ]);
});
