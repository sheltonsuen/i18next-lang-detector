import { Detector, DetectorOptions, Services } from './types';
import path from './detectors/path';

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
  static type: string;

  services: Services;
  detectorOptions: DetectorOptions;
  detectors: { [key: string]: Detector };

  constructor(services: Services, detectorOptions: DetectorOptions) {
    this.services = services;
    this.detectorOptions = {
      ...DEFAULT_OPTIONS,
      ...detectorOptions,
    };
    this.detectors = {};

    this.init();
  }

  init() {
    // backwards compatibility
    if (this.detectorOptions.lookupFromUrlIndex) {
      this.detectorOptions.lookupFromPathIndex = this.detectorOptions.lookupFromUrlIndex;
    }

    this.addDetector(path);
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
}

LanguageDetector.type = 'languageDetector';

export default LanguageDetector;
