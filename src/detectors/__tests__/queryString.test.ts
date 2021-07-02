import { DetectorOptions } from '../../types';
import { queryStringDetector } from '../queryString';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: 'lang',
  lookupSessionStorage: '',
  order: []
};

test('should return lang when match', () => {
  Object.defineProperty(window, 'location', {
    value: {
      search: '?foo=bar&lang=en&bar=foo',
    },
  });

  expect(queryStringDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en');
});
