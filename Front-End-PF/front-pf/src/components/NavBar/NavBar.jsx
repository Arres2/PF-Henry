import React from "react";
import {Link} from "react-router-dom";
import style from './NavBar.module.css';
import {useAuth0} from "@auth0/auth0-react"
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function NavBar() {
  const{isAuthenticated,loginWithRedirect,user, logout}=useAuth0()

  return (
    <div className={style.globalContainer}>
      <nav className='flex justify-between bg-1-color'>
      <div className='text-zinc-100'>
        <a className='flex text-3xl font-sans font-medium text-zinc-100 items-center ml-1 hover:text-4-color transition ease-in duration-200 no-underline ' href='/'>
        <img src='/images/logo.png' alt='logo' className='w-8 h-8 my-6 ml-6 mr-2'/>
        Travelop.<span className="text-xs mt-3">LATAM</span>
        </a>
      </div>
      <div className='mx-2'>
        <ul className='flex flex-row my-4 mx-2'>
          <Link to='/' className="no-underline">
          <li className='mx-4 text-zinc-100 hover:text-4-color transition ease-in duration-200 text-xl font-semibold'>Home</li>
          </Link>
          <Link to={'/aboutus'} className="no-underline ">
          <li className='mx-3.5 text-zinc-100 hover:text-4-color transition ease-in duration-200 cursor-pointer text-xl font-semibold'>About Us</li>
          </Link> 
        </ul>
        </div>
        {isAuthenticated? console.log(user):null}
      <div className='my-3.5 mx-2.5'>
      
        {isAuthenticated? <button className='mx-2 text-zinc-100 hover:text-4-color transition ease-in duration-200 text-xl p-1 font-semibold' onClick={logout}>Logout</button>:<button className='mx-2 text-zinc-100 hover:text-4-color transition ease-in duration-200 text-xl p-1 font-semibold' onClick={loginWithRedirect}>Login</button>}
    
        <Link to="/register">
        <button className='mx-2 text-zinc-100 bg-4-color w-24 h-12 rounded-lg hover:bg-zinc-100 hover:text-4-color transition ease-in duration-200 text-xl p-1'>Sign up</button>
        </Link>     
      </div>
    </nav>
    <Outlet/>
    <Footer/>
   </div>

   
  )
}
