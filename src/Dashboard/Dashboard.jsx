import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaUserDoctor, FaUsers } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";


const Dashboard = () => {

    const isAdmin = true

    return (
        <div className="flex">
            <div className="w-64 flex flex-col items-center min-h-screen border-2 ">
                <div>
                    <ul className="space-y-3 mt-6">
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/adminHome' className="flex items-center gap-2 bg-[#07332F] hover:bg-[#07332fce] duration-500 px-8 py-2 rounded-md text-white"><FaHome /> Admin Home</NavLink></li>

                                    <li><NavLink to='/dashboard/allUser' className="flex items-center gap-2 bg-[#07332F] hover:bg-[#07332fce] duration-500 px-8 py-2 rounded-md text-white"><FaUsers /> All User</NavLink></li>

                                    <li><NavLink to='/dashboard/allDoctor' className="flex items-center gap-2 bg-[#07332F] hover:bg-[#07332fce] duration-500 px-8 py-2 rounded-md text-white"><GiDoctorFace /> All Doctor</NavLink></li>

                                    <li><NavLink to='/dashboard/addDoctor' className="flex items-center gap-2 bg-[#07332F] hover:bg-[#07332fce] duration-500 px-8 py-2 rounded-md text-white"><FaUserDoctor /> Add Doctor</NavLink></li>

                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/cart'><FaCartShopping /> My Cart </NavLink></li>
                                    <li><NavLink to='/dashboard/paymentHistory'><FaCalendar /> Payment History</NavLink></li>
                                    <li><NavLink to='/dashboard/review'><FaAddressCard /> Review</NavLink></li>
                                    <li><NavLink to='/dashboard/booking'><FaList /> My Booking</NavLink></li>
                                </>
                        }
                        <hr />
                        <NavLink to='/' className={'flex items-center gap-2 bg-[#07332F] hover:bg-[#07332fce] duration-500 px-8 py-2 rounded-md text-white'}><FaHome /> Home</NavLink>
                    </ul>
                </div>
            </div>
            <div className="flex-1 p-8 bg-slate-100">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;