import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import type { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "cyan", display: "flex" }}>
      <div style={{ width: "150px", height: "100px" }}>
        <img  style={{objectFit: "contain", width: "100%", height: "100%" }} src={product.image_url} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <b>{product.weight}</b> • {product.details.form}
        </p>
        <p>
          {product.available
            ? `In stock: ${product.amountInStore}`
            : "Out of stock"}
        </p>
        <p>{product.price} ₸</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          disabled={!product.available}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
