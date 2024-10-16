import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
