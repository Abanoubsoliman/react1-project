import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Navbar";


export default function Layout() {
  return (
    <>
      <Nav />

      <Outlet />
      <Footer />

    </>
  )
}
