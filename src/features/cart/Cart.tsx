import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clearCart, removeFromCart, updateQuantity } from "./cartSlice";
import type { RootState } from "@/app/store";
import styles from "./Cart.module.css";

export default function Cart() {
  const { t } = useTranslation();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  if (items.length === 0)
    return <p className={styles.empty}>{t("cart.empty")} ☕</p>;

  const handleCheckout = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      dispatch(clearCart());
    }, 2500);
  };

  return (
    <>
      {/* Корзина */}
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <h2>{t("cart.title")}</h2>
          <button
            className={styles.clearBtn}
            onClick={() => dispatch(clearCart())}
          >
            {t("cart.clear")}
          </button>
        </div>

        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.imageBox}>
                <img src={item.image_url} alt={item.name} />
              </div>

              <div className={styles.info}>
                <h4>{item.name}</h4>
                <p className={styles.weight}>{item.weight}</p>
                <p className={styles.price}>
                  {item.price.toLocaleString()}₸<span>/ШТ</span>
                </p>

                {item.available ? (
                  <div className={styles.controls}>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      className={`${styles.qtyBtn} ${styles.minus}`}
                      disabled={item.quantity <= 1}
                    >
                      –
                    </button>

                    <span className={styles.qty}>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className={`${styles.qtyBtn} ${styles.plus}`}
                      disabled={item.quantity >= item.amountInStore}
                    >
                      +
                    </button>

                    <p className={styles.stockLeft}>
                      {t("common.stock_left", {
                        count: item.amountInStore - item.quantity,
                      })}
                    </p>
                  </div>
                ) : (
                  <div className={styles.outOfStock}>
                    {t("common.out_of_stock")}
                  </div>
                )}
              </div>

              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.total}>
            <span>{t("cart.total")}</span>
            <b>{totalPrice.toLocaleString()}₸</b>
          </div>

          <button onClick={handleCheckout} className={styles.checkoutBtn}>
            {t("cart.checkout")}
          </button>
        </div>
      </div>

      {/* модалка на всю страницу в спанч бобом */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <img
              src="/assets/gifs/done.gif"
              alt={t("common.purchase_success")}
              className={styles.modalGif}
            />
            <h3>{t("common.purchase_success")} 🎉</h3>
          </div>
        </div>
      )}
    </>
  );
}
