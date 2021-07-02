import { DetectorOptions } from '../../types';
import { htmlTagDetector } from '../htmlTag';

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
  jest.spyOn(document.documentElement, 'getAttribute').mockReturnValue('en-UK');

  expect(htmlTagDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en-UK');
});
