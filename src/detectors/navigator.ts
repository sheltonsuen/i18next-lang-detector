import { Detector } from '../types';

const NavigatorDetector: Detector = {
  name: 'navigator',
  lookup() {
    if (!navigator) return;

    const langs: string[] = [];
    if (navigator.languages) {
      // chrome only; not an array, so can't use .push.apply instead of iterating
      navigator.languages.forEach(v => langs.push(v));
    }

    // @ts-ignore
    if (navigator.userLanguage) {
      // @ts-ignore
      langs.push(navigator.userLanguage);
    }

    if (navigator.language) {
      langs.push(navigator.language);
    }

    return langs.length > 0 ? langs : undefined;
  },
};

export default NavigatorDetector;
