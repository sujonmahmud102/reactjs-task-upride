import userLogo from "../../assets/images/Ellipse 4.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start ">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">

                    </label>

                </div>
                <input type="text" placeholder="Search bookings" className="input input-bordered rounded-3xl shadow-lg w-3/4" />
                <div className="relative">
                    {/* <img src={SearchLogo} alt="" className="absolute right-2 cursor-pointer" /> */}
                    <div className="absolute right-[8px] -top-[17px]  cursor-pointer rounded-full p-2 text-white bg-gradient-to-b from-red-500 via-red-500 to-transparent ">
                        <BiSearch />
                    </div>

                </div>
            </div>

            <div className="navbar-center">
                <div>
                    <button className="btn-ghost flex items-center justify-center gap-3 bg-[#FB8085] text-white hover:bg-red-300 py-3 px-4 rounded-3xl "><AiOutlinePlus /> New Booking
                    </button>
                </div>
            </div>

            <div className="navbar-end">
                <div className="border rounded-3xl shadow-md">
                <button className="flex items-center justify-center gap-2 px-1 py-2">
                    <img src={userLogo} alt="" />
                    <p>Hello Lokesh! 👏</p>
                </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;