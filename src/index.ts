import { Detector, DetectorOptions, Services } from './types';
import { DEFAULT_OPTIONS, SUPPORTED_DETECTORS } from './constant';

class LanguageDetector {
  static type: 'languageDetector';

  services!: Services;
  detectorOptions!: DetectorOptions;
  detectors!: { [key: string]: Detector };

  constructor(services: Services, detectorOptions: DetectorOptions) {
    this.init(services, detectorOptions);
  }

  init(services: Services, detectorOptions: DetectorOptions) {
    this.services = services;
    this.detectorOptions = {
      ...DEFAULT_OPTIONS,
      ...detectorOptions,
    };
    this.detectors = SUPPORTED_DETECTORS;

    // backwards compatibility
    if (this.detectorOptions.lookupFromUrlIndex) {
      this.detectorOptions.lookupFromPathIndex = this.detectorOptions.lookupFromUrlIndex;
    }
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
