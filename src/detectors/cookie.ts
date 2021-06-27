import { Detector } from '../types';
import Cookies from 'js-cookie';

const CookieDetector: Detector = {
  name: 'cookie',
  lookup(options) {
    if (!document) return;

    return Cookies.get(options.lookupCookie);
  },
};

export default CookieDetector;
