import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.brand}>COFFEINO</div>
          <div className={styles.delivery}>
            <p className={styles.caption}>{t("footer.delivery.title")}</p>
            <div className={styles.row}>
              <span className={styles.icon}>🚚</span>
              <span className={styles.text}>
                {t("footer.delivery.description")}
              </span>
            </div>
          </div>
          <ul className={styles.nav}>
            <li>
              <Link to="/" className={`${styles.link} ${styles.active}`}>
                <span className={styles.dot} /> {t("navigation.home")}
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                {t("navigation.catalog")}
              </Link>
            </li>
            <li>
              <Link to="/order-search" className={styles.link}>
                {t("navigation.tracking")}
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                {t("navigation.about")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={styles.link}>
                {t("navigation.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* середина: контакты */}
        <div className={styles.center}>
          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.phone.title")}</p>
            <div className={styles.row}>
              <span className={styles.icon}>📞</span>
              <a href="tel:+77473455687" className={styles.text}>
                +7 (747) 345 56 87
              </a>
            </div>
            <a
              className={`${styles.pill} ${styles.whatsapp}`}
              href="https://wa.me/77473455687"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="/assets/images/whatapp.png" alt="WhatsApp" />
              </span>{" "}
              {t("footer.social.whatsapp")}
            </a>
          </div>

          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.email.title")}</p>
            <div className={styles.row}>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:coffee@shop.kz" className={styles.text}>
                coffee@shop.kz
              </a>
            </div>
          </div>

          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.social.title")}</p>
            <a
              className={`${styles.pill} ${styles.instagram}`}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="/assets/images/instagram.png" alt="Instagram" />
              </span>{" "}
              {t("footer.social.instagram")}
            </a>
          </div>
        </div>

        {/* правая сторона: шедул + адрес */}
        <div className={styles.right}>
          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.schedule.title")}</p>
            <div className={styles.row}>
              <span className={styles.icon}>🕘</span>
              <span className={styles.text}>Пн–Вс 9:00 - 20:00</span>
            </div>
          </div>

          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.address.title")}</p>
            <div className={styles.row}>
              <span className={styles.icon}>📍</span>
              <span className={styles.text}>Макаатаева 237</span>
            </div>
          </div>

          <div className={styles.block}>
            <p className={styles.caption}>{t("footer.route.title")}</p>
            <div className={styles.maps}>
              <a href="#" className={styles.mapItem}>
                <img src="/assets/images/2gis.png" alt="2GIS" />
                <span>2GIS</span>
              </a>
              <a href="#" className={styles.mapItem}>
                <img src="/assets/images/google.png" alt="Google" />
                <span>Google</span>
              </a>
              <a href="#" className={styles.mapItem}>
                <img src="/assets/images/yandex.png" alt="Yandex" />
                <span>Yandex</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* хр */}
      <hr className={styles.hr} />
      <div className={styles.legal}>
        <a
          className={styles.legalLink}
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.legal.offer")}
        </a>
        <a
          className={styles.legalLink}
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.legal.privacy")}
        </a>
      </div>

      {/* нижняя часть */}
      <div className={styles.bottom}>
        <div>{t("footer.copyright")}</div>
        <div>
          {t("footer.developed")} <span className={styles.heart}>❤</span>
        </div>
      </div>
    </footer>
  );
}
