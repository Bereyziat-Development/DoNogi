export interface PageTypes {
  params: {
    lng: LanguageUnion;
  };
  children?: React.ReactNode;
}

type StringKeyOf<T> = Extract<keyof T, string>;

export type LowercaseKeys<T> = {
  [K in StringKeyOf<T> as Lowercase<K>]: T[K];
};

export enum LanguageEnum {
  PL = 'pl',
  EN = 'en',
}

export type LanguageUnion = keyof LowercaseKeys<typeof LanguageEnum>;
