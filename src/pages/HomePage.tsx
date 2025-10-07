import { useGetProductsQuery } from "@/api/productsApi";
import ProductCard from "@/features/products/ProductCard";
import Cart from "@/features/cart/Cart";

export default function HomePage() {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No products found</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <aside
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: "12px",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: "1rem",
          height: "fit-content",
        }}
      >
        <Cart />
      </aside>
    </div>
  );
}
