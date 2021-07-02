import { DetectorOptions } from './types';
import { pathDetector } from './detectors/path';
import { cookieDetector } from './detectors/cookie';
import { htmlTagDetector } from './detectors/htmlTag';
import { localStorageDetector } from './detectors/localStorage';
import { navigatorDetector } from './detectors/navigator';
import { queryStringDetector } from './detectors/queryString';
import { sessionStorageDetector } from './detectors/sessionStorage';
import { subDomainDetector } from './detectors/subDomain';

export const DEFAULT_OPTIONS: DetectorOptions = {
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupFromSubdomainIndex: 0,
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
};

export const SUPPORTED_DETECTORS = {
  [cookieDetector.name]: cookieDetector,
  [htmlTagDetector.name]: htmlTagDetector,
  [localStorageDetector.name]: localStorageDetector,
  [navigatorDetector.name]: navigatorDetector,
  [pathDetector.name]: pathDetector,
  [queryStringDetector.name]: queryStringDetector,
  [sessionStorageDetector.name]: sessionStorageDetector,
  [subDomainDetector.name]: subDomainDetector,
};
