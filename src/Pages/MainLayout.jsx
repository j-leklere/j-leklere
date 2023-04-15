import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
