import { HistoryIcon, HouseIcon, SunIcon, SettingsIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
