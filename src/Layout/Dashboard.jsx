import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex max-w-[1180px] mx-auto">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu text-lg font-semibold space-y-4">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/payment'>
                            <MdPayment></MdPayment>
                            Payment History
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add Review
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList></FaList>
                            My Bookings
                        </NavLink>
                    </li>

                    <div className="divider "></div>

                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaShop></FaShop>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <GrMail></GrMail>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;