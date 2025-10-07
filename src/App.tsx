import AppRouter from "@/routes/AppRouter";
import Header from "@/components/Header/Header";

export default function App() {
  return (
      <div>
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
  );
}
