

// Create the locale function
const createLocaleFN = () => {
    let locale: Locales =  'en'; // Set default to 'en'

    const set = (next: Locales) => {
        locale = next;
    };

    const get = (): Locales => locale;

    return { get, set };
};

export const localeFN = createLocaleFN();

// Create the params function
const createParamsFN = () => {
    let params: Record<string, unknown> = {};

    const set = (next: Record<string, unknown>) => {
        params = next ;
    };

    const get = (): Record<string, unknown> => params;

    return { get, set };
};

export const paramsFN = createParamsFN();
