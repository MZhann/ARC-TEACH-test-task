import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { removeFromCart, updateQuantity } from "./cartSlice";

export default function Cart() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Your cart is empty ☕</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <div style={{width: "200px", height: "150px"}}>
            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={item.image_url} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <p>{item.weight}</p>
            <p>{item.price} ₸ / piece</p>
            <p>Available: {item.amountInStore}</p>

            <input
              type="number"
              min={1}
              max={item.amountInStore}
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />
            <p>Total: {item.price * item.quantity} ₸</p>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>✕</button>
        </div>
      ))}

      <hr />
      <p>
        <b>Grand Total: {totalPrice} ₸</b>
      </p>
    </div>
  );
}
