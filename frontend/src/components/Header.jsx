import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-[#58C87E] rounded-lg px-6 md:px-10
     lg:px-20'>
        {/* left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-7 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm'>
            <img src={assets.group_profiles} alt="group-profile" className='w-28' />
            <p>Simply browse through our extensive list of trusted doctors,
            <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 font-medium group'>
                Book appointment
                <img src={assets.arrow_icon} alt="arrow-img" className='w-3 mt-[2.5px] group-hover:translate-x-2 transition-all duration-300' />
            </a>
      </div>

      {/* right side */}
      <div className='md:w-1/2 relative'>
        <img src={assets.header_img} alt="header-img" className='w-full md:absolute bottom-0 h-auto rounded-lg' />
      </div>
    </div>
  )
}

export default Header
