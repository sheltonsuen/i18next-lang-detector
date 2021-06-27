export type Services = {
  languageUtils: {
    getBestMatchFromCodes?: boolean;
  };
};

export type DetectorOptions = {
  lookupFromPathIndex: number;
  lookupFromUrlIndex: number;
  order: string[];
  lookupQuerystring: string;
  lookupCookie: string;
  lookupLocalStorage: string;
  lookupSessionStorage: string;
  lookupFromSubdomainIndex: number;
};

export type I18nextOptions = {};

export type Detector = {
  name: string;
  lookup: (options: DetectorOptions) => string | undefined;
};
