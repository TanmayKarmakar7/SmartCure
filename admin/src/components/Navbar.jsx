import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }


  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-200 bg-white shadow'>
      <div className='flex items-center gap-2 text-xs'>
        <img src={assets.admin_logo} alt="admin-logo" className='w-36 sm:w-40 cursor-pointer' />
        <p className='border px-3 py-1 rounded-full border-gray-600 font-medium text-gray-800 mt-2.5 ml-1'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-[#58C87E] text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar
