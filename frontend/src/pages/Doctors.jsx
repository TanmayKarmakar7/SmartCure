import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Doctors = () => {

  const {speciality} = useParams()

  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const [filterDoc, setFilterDoc] = useState([])

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(prev => !prev)} className={`py-2 px-4 border border-gray-300 rounded text-sm transition-all sm:hidden flex items-center gap-1 ${showFilter ? 'bg-[#58C87E] text-white' : ''}`}>
          Filter By Specialization 
          <img src={assets.specialization_icon} alt="specialization_icon" className={`w-5 ${showFilter ? 'invert brightness-200' : ''}`} />
        </button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'} sm:flex`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-green-200 text-black' : ''}`}>General physician</p>

          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-green-200 text-black' : ''}`}>Gynecologist</p>

          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-green-200 text-black' : ''}`}>Dermatologist</p>

          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatrician' ? 'bg-green-200 text-black' : ''}`}>Pediatrician</p>

          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-green-200 text-black' : ''}`}>Neurologist</p>

          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-green-200 text-black' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 gap-y-6 px-3 sm:px-0'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 sm:min-h-[300px]'>
                  <img src={item.image} alt="top-doctors" className='bg-green-50 sm:h-[70%] w-full' />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                          <p>Available</p>
                      </div>
                      <p className='text-gray-900 text-[16px] font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-[13px]'>{item.speciality}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
