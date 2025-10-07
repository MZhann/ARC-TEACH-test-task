import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <h1>{t("welcome")}</h1>

      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="kz">KZ</option>
      </select>
    </header>
  );
}
