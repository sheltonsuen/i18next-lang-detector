import { DetectorOptions } from '../../types';
import SessionStorageDetector from '../sessionStorage';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: '',
  lookupSessionStorage: 'lang',
  order: [],
};

test('should return language when match', () => {
  window.sessionStorage.setItem('lang', 'en-AU');

  expect(SessionStorageDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en-AU');
});
