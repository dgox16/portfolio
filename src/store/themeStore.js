import { create } from "zustand";

export const useThemeStore = create((set) => ({
    darkMode: true,
    changeTheme: () =>
        set((state) => ({
            darkMode: !state.darkMode,
        })),
}));
