import { Detector } from '../types';

export const htmlTagDetector: Detector = {
  name: 'htmlTag',
  lookup() {
    if (!document) return;

    const lang = document.documentElement.getAttribute('lang');
    return lang ? lang : undefined;
  },
};
