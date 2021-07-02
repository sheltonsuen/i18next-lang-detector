import { Detector } from '../types';
import { isSessionStorageAvailable } from '../utils';

export const sessionStorageDetector: Detector = {
  name: 'sessionStorage',
  lookup(options) {
    if (!isSessionStorageAvailable()) {
      return undefined;
    }

    const lang = window.sessionStorage.getItem(options.lookupSessionStorage);
    return lang ? lang : undefined;
  },
};
