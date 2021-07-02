import { localStorageDetector } from '../localStorage';
import { DetectorOptions } from '../../types';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: 'i18nextLng',
  lookupQuerystring: '',
  lookupSessionStorage: '',
  order: []
};

test('should return language when match', () => {
  window.localStorage.setItem('i18nextLng', 'cn');

  expect(localStorageDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('cn');
});
