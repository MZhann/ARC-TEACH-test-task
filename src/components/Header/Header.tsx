import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import styles from "./Header.module.css";
import Cart from "@/features/cart/Cart";

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  const openMenu = () => {
    setClosing(false);
    setOpen(true);
  };

  const closeMenu = () => {
    // Триггернуть fade-out анимацию
    setClosing(true);
    // подождать конца анимация перед анмаунтом
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* мобилка слева */}
          <div className={styles.leftMobile}>
            <button
              className={`${styles.pill} ${styles.iconBtn}`}
              aria-label="Open menu"
              onClick={openMenu}
            >
              {/* бургер баттн */}
              <span className={styles.burgerIcon} />
            </button>

            <LanguageSelect />
          </div>

          {/* лого в центре (мобилка) / лого слева (десктоп) */}
          <Link className={styles.logo} to="/">
            COFFEINO
          </Link>

          {/* мобилка справа */}
          <div className={styles.rightMobile}>
            <Link
              to="/"
              className={`${styles.pill} ${styles.catalogBtn}`}
            >
              {t("navigation.catalog")}
            </Link>

            <button
              className={`${styles.pill} ${styles.iconBtn}`}
              aria-label="Cart"
              onClick={() => setMobileCartOpen(true)}
            >
              {/* иконка карзины */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden
                className={styles.cartIcon}
              >
                <path
                  d="M7 7h14l-1.5 8h-12z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="19" r="1.6" fill="currentColor" />
                <circle cx="17" cy="19" r="1.6" fill="currentColor" />
                <path
                  d="M3 3h2l2 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* нав в центре (десктоп) */}
          <nav className={styles.navDesktop} aria-label="Main">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t("navigation.home")}
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t("navigation.catalog")}
            </NavLink>
            <NavLink
              to="/order-search"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t("navigation.tracking")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t("navigation.about")}
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {t("navigation.contacts")}
            </NavLink>
          </nav>

          {/* на десктопе язык справа */}
          <div className={styles.langDesktop}>
            <LanguageSelect />
          </div>
        </div>
      </header>
      {mobileCartOpen && (
        <div
          className={`${styles.cartOverlay} ${styles.fadeIn}`}
          onClick={() => setMobileCartOpen(false)}
        >
          <div
            className={styles.cartSidebar}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.cartHeader}>
              <button
                className={styles.closeBtn}
                onClick={() => setMobileCartOpen(false)}
              >
                ✕
              </button>
            </div>
            <Cart />
          </div>
        </div>
      )}
      {/* мобилка бургер баттон с анимацией фэйд ин (мобилка) */}
      {open && (
        <div
          className={`${styles.sheet} ${
            closing ? styles.fadeOut : styles.fadeIn
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.sheetCard}>
            <div className={styles.sheetHead}>
              <h2>COFFEINO</h2>
              <button
                className={styles.closeBtn}
                aria-label="Close menu"
                onClick={closeMenu}
              >
                ✕
              </button>
            </div>

            <ul className={styles.sheetList}>
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sheetLink} ${styles.sheetActive}`
                      : styles.sheetLink
                  }
                >
                  {t("navigation.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sheetLink} ${styles.sheetActive}`
                      : styles.sheetLink
                  }
                >
                  {t("navigation.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/order-search"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sheetLink} ${styles.sheetActive}`
                      : styles.sheetLink
                  }
                >
                  {t("navigation.tracking")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.sheetLink} ${styles.sheetActive}`
                      : styles.sheetLink
                  }
                >
                  {t("navigation.contacts")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
