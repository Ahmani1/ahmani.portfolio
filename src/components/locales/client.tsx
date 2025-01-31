'use client';

import { useLayout } from '@/store/layout';
import { useEffect } from 'react';

type TranslateProviderProps = {
    lang: Locales;
    children: React.ReactNode;
}

const LangProvider = ({ lang, children }: TranslateProviderProps) => {
    const { SetLocale } = useLayout();
    console.log(lang, "lang");
    
    useEffect(() => {
        SetLocale(lang);
       
    }, [lang, SetLocale]);

    return <>{children}</>;
};

export default LangProvider;