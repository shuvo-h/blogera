import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const {user,logOut} = useAuth();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-lime-200">Health Guard Hospital</Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? "X":"+"}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item"><Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Home</Link></li>
              <li className="nav-item"><Link to="/departments" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Departments</Link></li>
              <li className="nav-item"><Link to="/allnews" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >News</Link></li>
              <li className="nav-item"><Link to="/appointment" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Appointment</Link></li>
              <li className="nav-item"><Link to="/doctors" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Doctors</Link></li>
              {
                user.email === "test@test.com" && <li className="nav-item"><Link to="/dashboard" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Dashboard</Link></li>
              }
              {
                user.email 
                ? <li className="nav-item"><button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={logOut}>LogOut</button></li> 
                : <li className="nav-item"><Link to="/login" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >Login</Link></li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
    );
};

export default Navbar;