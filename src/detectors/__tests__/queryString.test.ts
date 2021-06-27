import { DetectorOptions } from '../../types';
import QueryStringDetector from '../queryString';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: 'lang',
  lookupSessionStorage: '',
  order: [],
};

test('should return lang when match', () => {
  Object.defineProperty(window, 'location', {
    value: {
      search: '?foo=bar&lang=en&bar=foo',
    },
  });

  expect(QueryStringDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en');
});
