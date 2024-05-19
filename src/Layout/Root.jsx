import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            <div className="max-w-[1180px] mx-auto">
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;