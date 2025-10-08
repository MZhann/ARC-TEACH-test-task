import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { addToCart, decreaseQuantity } from "@/features/cart/cartSlice";
import { type RootState } from "@/app/store";
import type { Product } from "@/types/product";
import { useState } from "react";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [added, setAdded] = useState(false);
  const itemInCart = useSelector((state: RootState) =>
    state.cart.items.find((i) => i.id === product.id)
  );

  const qty = itemInCart?.quantity || 0;
  const roastLevel = (product.id.charCodeAt(0) % 5) + 1;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.topRow}>
        {/* Слева: image */}
        <div className={styles.imageContainer}>
          <span className={styles.newLabel}>НОВИНКА</span>
          <img
            className={styles.image}
            src={product.image_url}
            alt={product.name}
          />
        </div>

        {/* Справа: info */}
        <div className={styles.infoColumn}>
          <div>
            <p className={styles.article}>Артикул: 564-65А</p>
            <h3 className={styles.productName}>{product.name}</h3>
          </div>

          <div className={`${styles.desktopDescription}`}>
            <p>{product.description}</p>
          </div>

          <span className={styles.desktopWeightBadge}>{product.weight}</span>

          <div className={styles.infoDetails}>
            <div className={styles.infoLabels}>
              <p>Тип:</p>
              <p>Обжарка:</p>
              <p>Форма:</p>
              <p>Состав:</p>
              <p>Объем:</p>
            </div>

            <div className={styles.infoValues}>
              <p>кофе</p>
              <div className={styles.roastLevel}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < roastLevel
                        ? "/assets/icons/friedBean.svg"
                        : "/assets/icons/grayBean.svg"
                    }
                    alt={i < roastLevel ? "Обжаренное зерно" : "Серое зерно"}
                    className={styles.beanIcon}
                  />
                ))}
              </div>

              <p>{product.details.form}</p>
              <p>Кофе, вода</p>
              <p>{product.weight}</p>
            </div>
          </div>

          <div className={styles.desktopBottomRow}>
            <div className={styles.price}>{product.price}₸</div>

            {/* Если продукта нет в корзине показать кнопку добавить */}
            {!qty ? (
              <button
                onClick={handleAddToCart}
                disabled={!product.available}
                className={styles.addToCartBtn}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {t("product.add_to_cart")}
              </button>
            ) : (
              // если уже добавлен в корзину -> на десктопе показать компонент с количеством товаара в корзине и кнопками
              <div className={styles.cartControls}>
                <button
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  className={`${styles.qtyBtn} ${styles.deleteBtn}`}
                  aria-label="Удалить из корзины"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M3 6h18M9 6V4h6v2m-7 4v8m4-8v8m4-8v8M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"
                    />
                  </svg>
                </button>

                <span className={styles.qty}>{qty}</span>

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={`${styles.qtyBtn} ${styles.plusBtn}`}
                  aria-label="Добавить еще"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* остальное снизу */}
      <span className={styles.weightBadge}>{product.weight}</span>

      <div
        className={`${styles.description} ${expanded ? styles.expanded : ""}`}
      >
        <p>{product.description}</p>
      </div>

      {product.description && (
        <button
          className={styles.moreBtn}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Скрыть " : "Подробнее "}
          <span>{expanded ? "˄" : "˅"}</span>
        </button>
      )}

      <div className={styles.bottomRow}>
        <div className={styles.price}>{product.price}₸</div>

        <button
          onClick={handleAddToCart}
          disabled={!product.available}
          className={styles.addToCartBtn}
        >
          {added ? (
            t("common.added")
          ) : (
            <>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {t("product.add_to_cart")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
