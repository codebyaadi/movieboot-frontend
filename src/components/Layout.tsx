import { Outlet }  from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <main className="flex justify-center items-center">
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout