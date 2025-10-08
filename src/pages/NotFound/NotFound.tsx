import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>{t("not_found.title")}</h1>
          <p className={styles.description}>
            {t("not_found.description")}
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.primaryButton}>
            {t("not_found.home_button")}
            </Link>
            <Link to="/" className={styles.secondaryButton}>
              {t("not_found.catalog_button")}
            </Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.coffeeSpill}>☕💧</div>
          <p className={styles.illustrationText}>
            {t("not_found.illustration")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
