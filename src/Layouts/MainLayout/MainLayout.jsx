import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../pages/Shared/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
