// package for toggling light and dark mode
import { useTheme } from "next-themes";
// material design icons
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeSwitch = ({ mounted }: { mounted: boolean }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button onClick={toggleTheme}>
      {currentTheme === "light" ? (
        <MdDarkMode className="text-2xl" />
      ) : (
        <MdLightMode className="text-2xl text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeSwitch;
