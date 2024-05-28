import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex max-w-[1180px] mx-auto">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu text-lg font-semibold space-y-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageBookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/allUsers'>
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaList></FaList>
                                    My Bookings
                                </NavLink>
                            </li> */}
                        </>
                            :
                            // user nav start
                            <>
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
                            </>
                        // user nav end
                    }
                    {/* Shared Nav linked */}
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
                        <NavLink to='/order/shop'>
                            <FaShop></FaShop>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
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