import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelect.module.css";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const langs = ["en", "ru", "kz"];

  // Extract just the language code from the full locale (e.g., "ru-ru" -> "ru")
  const getCurrentLanguage = () => {
    return i18n.language.split("-")[0];
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.selected} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        {getCurrentLanguage().toUpperCase()}
        <span className={styles.arrow}>{open ? "˄" : "˅"}</span>
      </div>

      {/* Дропдаун лист */}
      {open && (
        <div className={styles.dropdown}>
          {langs.map((lang) => (
            <div
              key={lang}
              className={`${styles.option} ${
                getCurrentLanguage() === lang ? styles.active : ""
              }`}
              onClick={() => changeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
