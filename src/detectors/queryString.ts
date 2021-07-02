import { Detector } from '../types';

export const queryStringDetector: Detector = {
  name: 'queryString',
  lookup(options) {
    if (!window) return;

    const queryString = window.location.search.substring(1);
    const queryPairs = queryString.split('&').map(v => ({
      key: v.substring(0, v.indexOf('=')),
      value: v.substring(v.indexOf('=') + 1),
    }));

    const langQuery = queryPairs.find(v => v.key === options.lookupQuerystring);
    return langQuery?.value;
  },
};
