import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "./components/Footer/Footer";
import "@/styles/globals.css";

export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main className="mainOne" style={{backgroundColor: "rgba(241, 241, 241, 1)"}}> 
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
