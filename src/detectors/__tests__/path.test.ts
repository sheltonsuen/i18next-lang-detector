import path from '../path';
import { DetectorOptions } from '../../types';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  caches: [],
  excludeCacheFor: [],
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: '',
  lookupSessionStorage: '',
  order: [],
};

test('should return lang when match', () => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/foo/bar',
    },
  });

  expect(path.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('foo');
});
