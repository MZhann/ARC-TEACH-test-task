import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetProductsQuery } from "@/api/productsApi";
import ProductCard from "@/features/products/ProductCard";
import Cart from "@/features/cart/Cart";
import styles from "./Catalog.module.css";

export default function Catalog() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetProductsQuery();
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  if (isLoading)
    return (
      <div className={styles.loading}>
        <img
          src="/assets/gifs/loading.gif"
          alt={t("common.loading")}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    );
  if (!data) return <p>{t("catalog.no_products")}</p>;

  return (
    <div className={styles.catalog}>
      {/* Лист продуктов */}
      <div className={styles.productsList}>
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Корзина на десктопе */}
      <aside className={styles.cartAside}>
        <Cart />
      </aside>

      {/* корзина на мобилке оверлэй */}
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

      {/* фиксед кнопка корзины на мобилке */}
      <button
        className={styles.mobileCartButton}
        onClick={() => setMobileCartOpen(true)}
      >
        🛒
      </button>
    </div>
  );
}
