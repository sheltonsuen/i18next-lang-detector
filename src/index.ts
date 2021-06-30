import { Detector, DetectorOptions, Services } from './types';
import PathDetector from './detectors/path';
import CookieDetector from './detectors/cookie';
import HtmlTagDetector from './detectors/htmlTag';
import LocalStorageDetector from './detectors/localStorage';
import NavigatorDetector from './detectors/navigator';
import QueryStringDetector from './detectors/queryString';
import SessionStorageDetector from './detectors/sessionStorage';
import SubDomainDetector from './detectors/subDomain';

const DEFAULT_OPTIONS: DetectorOptions = {
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

class LanguageDetector {
  static type: 'languageDetector';

  services!: Services;
  detectorOptions!: DetectorOptions;
  detectors!: { [key: string]: Detector; };

  constructor(services: Services, detectorOptions: DetectorOptions) {
    this.init(services, detectorOptions);
  }

  init(services: Services, detectorOptions: DetectorOptions) {
    this.services = services;
    this.detectorOptions = {
      ...DEFAULT_OPTIONS,
      ...detectorOptions,
    };
    this.detectors = {};

    // backwards compatibility
    if (this.detectorOptions.lookupFromUrlIndex) {
      this.detectorOptions.lookupFromPathIndex = this.detectorOptions.lookupFromUrlIndex;
    }

    this.loadDetectors();
  }

  private loadDetectors() {
    this.addDetector(CookieDetector);
    this.addDetector(HtmlTagDetector);
    this.addDetector(LocalStorageDetector);
    this.addDetector(NavigatorDetector);
    this.addDetector(PathDetector);
    this.addDetector(QueryStringDetector);
    this.addDetector(SessionStorageDetector);
    this.addDetector(SubDomainDetector);
  }

  addDetector(detector: Detector) {
    this.detectors[detector.name] = detector;
  }

  detect() {
    const detectedLangs = this.detectorOptions.order.reduce<string[]>(
      (langs, detectorName) => {
        const lang = this.detectors[detectorName]?.lookup(this.detectorOptions);
        const detectedLangs = typeof lang === 'string' ? [lang] : lang;
        return detectedLangs ? [...langs, ...detectedLangs] : langs;
      },
      []
    );

    if (this.services.languageUtils.getBestMatchFromCodes) {
      return detectedLangs;
    }
    return detectedLangs[0];
  }

  cacheUserLanguage() {
    // avoid crash, I will not implement it right now
  }
}

LanguageDetector.type = 'languageDetector';

export default LanguageDetector;
