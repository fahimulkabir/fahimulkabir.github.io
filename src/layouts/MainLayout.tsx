import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <main className="obj-width sec-space extra-space">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
