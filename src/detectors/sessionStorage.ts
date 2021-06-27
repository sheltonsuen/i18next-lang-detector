import { Detector } from '../types';
import { isSessionStorageAvailable } from '../utils';

const SessionStorageDetector: Detector = {
  name: 'sessionStorage',
  lookup(options) {
    if (!options.lookupSessionStorage || !isSessionStorageAvailable()) {
      return undefined;
    }

    const lang = window.sessionStorage.getItem(options.lookupSessionStorage);
    return lang ? lang : undefined;
  },
};

export default SessionStorageDetector;
