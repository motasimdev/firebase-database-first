import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
