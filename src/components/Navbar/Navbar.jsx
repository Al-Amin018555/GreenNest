import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/plants'>Plants</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
        {
            user &&
            <li><NavLink to='/plant-details'>Plant Details</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <div className="font-semibold text-[#609349]">
                            {links}

                        </div>
                    </ul>
                </div>
                <Link to='/' className="flex gap-1 items-center">
                    <img src={logo} className="w-12.5 rounded-2xl" alt="" />
                    <p className="text-xl"> <span className="font-semibold text-[#144100]">Green</span><span className="font-semibold text-[#609349]">Nest</span> </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex font-semibold text-[#609349]">
                        {links}

                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="mr-4"> {user.email} </div>
                }
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><p onClick={() => logOut()}>Logout</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;