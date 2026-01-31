import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const Navbar = () => {
    const { user, logOut,setUser } = useContext(AuthContext);
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
        <div className="navbar sticky top-0 z-20 bg-[#6f9349] text-white font-semibold shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#609349] rounded-box z-20 mt-3 w-52 p-2 shadow">
                        <div className="font-semibold">
                            {links}
                        </div>
                    </ul>
                </div>
                <Link to='/' className="flex gap-2 items-center">
                    <img src={logo} className="w-12.5 rounded-2xl" alt="" />
                    <p className="text-xl"> <span>Green</span><span>Nest</span> </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex">
                        {links}

                    </div>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img
                                    alt="user image"
                                    src={user.photoURL} /> : <img
                                    alt="user image"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            }
                        </div>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#609349] rounded-box z-20 mt-3 w-52 p-2 shadow">
                        {
                            user ? <>
                                <li>
                                    <p className="font-bold">{user.displayName}</p>
                                </li>

                                <li><p onClick={() => {
                                    logOut()
                                    setUser(null)
                                    }}>Logout</p></li>

                            </> : <>

                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;