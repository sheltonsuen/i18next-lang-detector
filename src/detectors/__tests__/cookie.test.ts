import { DetectorOptions } from '../../types';
import { cookieDetector } from '../cookie';
import Cookies from 'js-cookie';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: 'lang',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: '',
  lookupQuerystring: '',
  lookupSessionStorage: '',
  order: [],
};

test('should return lang when match', () => {
  Cookies.set('lang', 'zh-cn');

  expect(cookieDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('zh-cn');
});
