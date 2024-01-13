import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
    persist(
        (set) => ({
            darkMode: false,
            changeTheme: () =>
                set((state) => ({
                    darkMode: !state.darkMode,
                })),
        }),
        {
            name: "darkMode",
        },
    ),
);
