import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-40 cursor-pointer' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-[#58C87E] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-[#58C87E] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-[#58C87E] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-[#58C87E] w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src={assets.profile_pic} alt="profile-picture" className='w-10' />
                <img src={assets.dropdown_icon} alt="dropdown-icon" className='w-2.5' />
                <div className='absolute top-0 right-0 pt-[55px] text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div> 
            : <button onClick={() => navigate('/login')} className='bg-[#58C87E] text-white px-8 py-3 rounded-full hidden md:block cursor-pointer'>Create account</button>
        }

        <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="menu-icon" className='w-9 md:hidden' />

        {/* mobile menu  */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} alt="logo" className='w-36' />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="cross-icon" className='w-7' />
          </div>
          <hr className='border border-[#58C87E] opacity-50' />
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink className='px-4 py-2 rounded inline-block' to={"/"} onClick={() => setShowMenu(false)}><p>HOME</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block' to={"/doctors"} onClick={() => setShowMenu(false)}><p>DOCTORS</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block' to={"/about"} onClick={() => setShowMenu(false)}><p>ABOUT</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block' to={"/contact"} onClick={() => setShowMenu(false)}><p>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
