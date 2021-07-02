import { Detector } from '../types';
import { isLocalStorageAvailable } from '../utils';

export const localStorageDetector: Detector = {
  name: 'localStorage',
  lookup(options) {
    if (!isLocalStorageAvailable()) {
      return undefined;
    }

    const lang = window.localStorage.getItem(options.lookupLocalStorage);
    return lang ? lang : undefined;
  },
};
