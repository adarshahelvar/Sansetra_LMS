import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",

          background: "#030712",
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
