import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";

export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main style={{backgroundColor: "rgba(241, 241, 241, 1)" }}> 
        <Outlet /> 
      </main>
    </div>
  );
}
