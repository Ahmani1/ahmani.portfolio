import { create } from 'zustand';
import { produce } from 'immer';

export type LayoutState = {
    locale: Locales | null
    SetLocale: (payload: Locales) => void
    mode: string

    SetMode: (payload: string) => void
}

export const useLayout = create<LayoutState>((set) => ({
    locale: null,
    mode: 'light',


    SetLocale: (payload: Locales) => set(produce((state) => {
        state.locale = payload;
    })),

    SetMode: (payload: string) => set(produce((state) => {
        state.mode = payload;
    }))

}));
