import { Detector } from '../types';
import Cookies from 'js-cookie';

export const cookieDetector: Detector = {
  name: 'cookie',
  lookup(options) {
    if (!document) return;

    return Cookies.get(options.lookupCookie);
  },
};
