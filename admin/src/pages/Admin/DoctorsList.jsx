import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const DoctorsList = () => {

  const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)

  useEffect(() => {
    if(aToken){
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='flex flex-wrap w-full gap-5 pt-4 gap-y-6'>
        {
          doctors.map((item, index) => (
            <div key={index} className='border border-green-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group'>
              <img src={item.image} alt={`${item.name}-image`} className='h-[70%] bg-green-50 group-hover:bg-[#58C87E] transition-all duration-500' />
              <div className='p-4'>
                <p className='text-neutral-800 font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-xs'>{item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm font-medium text-gray-500'>
                  <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} className='w-[14px] h-[14px] mt-[2.5px] accent-green-600' />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
