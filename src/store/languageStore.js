import { create } from "zustand";

export const useLanguageStore = create((set) => ({
    inSpanish: true,
    changeLanguage: () =>
        set((state) => ({
            inSpanish: !state.inSpanish,
        })),
}));
