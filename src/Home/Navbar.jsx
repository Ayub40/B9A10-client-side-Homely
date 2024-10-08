import { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const artsItem = useLoaderData();
    // const { email } = artsItem;

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/allitem" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>All Art & craft Items</NavLink></li>
        <li><NavLink to="/additem" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>Add Craft Item</NavLink></li>
        <li><NavLink to='/myitem' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>My Art&Craft List</NavLink></li>
        {/* <li><NavLink to=""></NavLink>Login</li>
        <li><NavLink to="">Register</NavLink></li> */}
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown lg:gap-1">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost  lg:text-xl">AK-ART</a>
            </div>
            <div className="navbar-center hidden lg:flex mr-10">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-1">
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <button className="btn btn-circle">
                        <div className="w-8 rounded-full">
                            <img className="rounded-full" src={user?.photoURL || "https://i.ibb.co/z6TYbrc/user.png"} />
                        </div>
                    </button>
                </div>

                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-outline ml-2 md:px-12 mb-2">Logged Out</button>
                        :
                        <div className="lg:flex">
                            <Link to='/login'>
                                <button className="sm:btn btn-outline ml-2 px-12 mb-2 ">Login</button>
                            </Link>
                            <Link to='/register'><button className="sm:btn btn-outline ml-2 px-12 mb-2">Register</button></Link>
                        </div>
                }

                {/* <Link to='/login'><button className="btn btn-outline ml-2 px-12 mb-2">Login</button></Link>
                <Link to='/register'><button className="btn btn-outline ml-2 px-12 mb-2">Register</button></Link> */}
            </div>
        </div>
    );
};

export default Navbar;