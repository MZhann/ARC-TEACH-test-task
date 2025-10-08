import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t("homepage.hero.title")}
            <span className={styles.highlight}>COFFEINO</span>
          </h1>
          <p className={styles.heroSubtitle}>{t("homepage.hero.subtitle")}</p>
          <div className={styles.heroButtons}>
            <Link to="/" className={styles.primaryButton}>
              {t("homepage.hero.catalog_button")}
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              {t("homepage.hero.about_button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
