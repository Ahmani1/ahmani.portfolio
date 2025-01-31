const createLocaleFN = (): LocaleFN => {
    let locale: Locales = 'en';
  
    const set = async (next: Locales): Promise<void> => {
      locale = next;
    };
  
    const get = async (): Promise<Locales> => {
      return locale;
    };
  
    return { get, set };
  };
  
  export const localeFN = createLocaleFN();