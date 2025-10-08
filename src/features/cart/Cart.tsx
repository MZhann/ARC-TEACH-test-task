import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearCart, removeFromCart, updateQuantity } from "./cartSlice";
import type { RootState } from "@/app/store";
import styles from "./Cart.module.css";

export default function Cart() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  if (items.length === 0)
    return <p className={styles.empty}>Корзина пуста ☕</p>;

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
          <h2>Корзина</h2>
          <button
            className={styles.clearBtn}
            onClick={() => dispatch(clearCart())}
          >
            Очистить
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
                      осталось {item.amountInStore - item.quantity} шт на складе
                    </p>
                  </div>
                ) : (
                  <div className={styles.outOfStock}>Нет в наличии</div>
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
            <span>Итого к оплате</span>
            <b>{totalPrice.toLocaleString()}₸</b>
          </div>

          <button onClick={handleCheckout} className={styles.checkoutBtn}>
            Оформить заказ
          </button>
        </div>
      </div>

      {/* модалка на всю страницу в спанч бобом */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <img
              src="/assets/gifs/done.gif"
              alt="Успешно куплено"
              className={styles.modalGif}
            />
            <h3>Успешно куплено 🎉</h3>
          </div>
        </div>
      )}
    </>
  );
}
