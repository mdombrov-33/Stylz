import { create } from "zustand";

const themes = {
  lemonade: "lemonade",
  sunset: "sunset",
};

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || themes.lemonade,
  toggleTheme: () =>
    set((state) => {
      const newTheme =
        state.theme === themes.lemonade ? themes.sunset : themes.lemonade;
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
