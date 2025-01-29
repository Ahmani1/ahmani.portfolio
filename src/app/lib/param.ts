

const createLocaleFN = () => {
    let locale: Locales =  'en'; 
    const set = (next: Locales) => {
        locale = next;
    };

    const get = (): Locales => locale;

    return { get, set };
};

export const localeFN = createLocaleFN();
const createParamsFN = () => {
    let params: Record<string, unknown> = {};

    const set = (next: Record<string, unknown>) => {
        params = next ;
    };

    const get = (): Record<string, unknown> => params;

    return { get, set };
};

export const paramsFN = createParamsFN();
