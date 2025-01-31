
declare module 'async/eachSeries'; 

declare global {
  type Locales = 'en' | 'fr';
}

declare global {type LocaleFN = {
  get: () => Promise<Locales>; // Returns a Promise
  set: (lang: Locales) => Promise<void>; // Returns a Promise
};}
export {};
