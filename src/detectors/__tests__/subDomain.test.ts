import { DetectorOptions } from '../../types';
import { subDomainDetector } from '../subDomain';

const DEFAULT_DETECTOR_OPTIONS: DetectorOptions = {
  lookupFromSubdomainIndex: 0,
  lookupCookie: '',
  lookupFromPathIndex: 0,
  lookupFromUrlIndex: 0,
  lookupLocalStorage: 'i18nextLng',
  lookupQuerystring: '',
  lookupSessionStorage: '',
  order: [],
};

test('should return language when match', () => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://en.deepstudy.tech?lang=en',
    },
  });

  expect(subDomainDetector.lookup(DEFAULT_DETECTOR_OPTIONS)).toBe('en');
});
