import {
  HistoryIcon,
  HouseIcon,
  SunIcon,
  SettingsIcon,
  MoonIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link

    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para pagina inicial"
        title="Ir para pagina inicial"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para o historico"
        title="Ir para o historico "
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para configurações"
        title="Ir para configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
