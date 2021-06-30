import { DetectorOptions } from './types';
import PathDetector from './detectors/path';
import CookieDetector from './detectors/cookie';
import HtmlTagDetector from './detectors/htmlTag';
import LocalStorageDetector from './detectors/localStorage';
import NavigatorDetector from './detectors/navigator';
import QueryStringDetector from './detectors/queryString';
import SessionStorageDetector from './detectors/sessionStorage';
import SubDomainDetector from './detectors/subDomain';

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
  [CookieDetector.name]: CookieDetector,
  [HtmlTagDetector.name]: HtmlTagDetector,
  [LocalStorageDetector.name]: LocalStorageDetector,
  [NavigatorDetector.name]: NavigatorDetector,
  [PathDetector.name]: PathDetector,
  [QueryStringDetector.name]: QueryStringDetector,
  [SessionStorageDetector.name]: SessionStorageDetector,
  [SubDomainDetector.name]: SubDomainDetector,
};
