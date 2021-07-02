import { Detector } from '../types';

const LANG_PATH_SEGMENT = /\/([a-zA-Z-]*)/g;

export const pathDetector: Detector = {
  name: 'path',
  lookup(options) {
    const langSegments = window?.location?.pathname?.match(LANG_PATH_SEGMENT);
    if (!langSegments) {
      return undefined;
    }

    const pathSegment = langSegments[options.lookupFromPathIndex];
    return pathSegment?.replace('/', '');
  },
};
