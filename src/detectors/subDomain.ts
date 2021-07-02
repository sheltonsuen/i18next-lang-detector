import { Detector } from '../types';
import { removeProtocol } from '../utils';

const LANG_SUB_DOMAIN_REGEX = /(?:http[s]*:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi;

export const subDomainDetector: Detector = {
  name: 'subDomain',
  lookup(options) {
    if (!window?.location) return;

    const langs = window.location.href.match(LANG_SUB_DOMAIN_REGEX);
    if (!langs) return;

    const langsWithoutProtocol = langs.map(removeProtocol);
    return langsWithoutProtocol[options.lookupFromSubdomainIndex]?.replace(
      '.',
      ''
    );
  },
};
