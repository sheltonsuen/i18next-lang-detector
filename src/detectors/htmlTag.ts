import { Detector } from '../types';

const HtmlTagDetector: Detector = {
  name: 'htmlTag',
  lookup() {
    if (!document) return;

    const lang = document.documentElement.getAttribute('lang');
    return lang ? lang : undefined;
  },
};

export default HtmlTagDetector;
