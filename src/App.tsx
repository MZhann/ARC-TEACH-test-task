import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";

export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      {/* <main style={{ flex: 1 }}>
        <Outlet /> 
      </main> */}
    </div>
  );
}
