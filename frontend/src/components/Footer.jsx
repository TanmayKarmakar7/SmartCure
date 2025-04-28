import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate() 

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="logo" className='mb-5 w-40' />
                <p className='w-full md:w-3/3 text-gray-600 leading-6'>At SmartCure, we believe in Smarter Appointments and Better Care. Our platform is designed to simplify the way you connect with trusted healthcare providers - anytime, anywhere. From easy scheduling to personalized care options, SmartCure puts your health first with convenience and confidence.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                    <li onClick={() => {navigate('/'); scrollTo(0, 0)}}>Home</li>
                    <li onClick={() => {navigate('/doctors'); scrollTo(0, 0)}}>Doctors</li>
                    <li onClick={() => {navigate('/about'); scrollTo(0, 0)}}>About us</li>
                    <li onClick={() => {navigate('/contact'); scrollTo(0, 0)}}>Contact us</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>tanmaykarmakar746@gmail.com</li>
                    <li>umeshdeogharia16@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='border border-gray-200' />
            <p className='py-5 text-sm text-center text-gray-600 font-medium'>This Page is Developed By - Tanmay Karmakar & Umesh Deogharia.</p>
        </div>
    </div>
  )
}

export default Footer
