import { DetectorOptions } from '../../types';
import { sessionStorageDetector } from '../sessionStorage';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: '',
  lookupSessionStorage: 'lang',
  order: []
};

test('should return language when match', () => {
  window.sessionStorage.setItem('lang', 'en-AU');

  expect(sessionStorageDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en-AU');
});
