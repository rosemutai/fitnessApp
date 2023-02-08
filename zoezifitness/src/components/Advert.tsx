import React from 'react'
import image2 from '../images/alex.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars, faTimes, faDumbbell, faPercent, faChalkboardUser, faPersonWalkingArrowRight, faPerson, faPersonWalking } from '@fortawesome/free-solid-svg-icons'

type AdType = {
  id: number,
  imageSrc: string,
  totalNumber: number,
  title: string
}

const array: AdType[] =[
  {
    id: 1,
    imageSrc: image2,
    totalNumber: 65,
    title: 'string one'
  }

]

const Advert = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-wrap justify-center mt-24 bg-black b-10'>
      <div className="ad  flex flex-col justify-center items-center my-3 md:my-6 mr-3 md:mr-9">
        <FontAwesomeIcon icon={faPersonWalking} className='w-24 h-16 text-yellow-600 ' />
        <h5 className='total font-extrabold text-xl text-white mt-2'>700+</h5>
        <h6 className='ad-title font-medium text-xs text-yellow-600 white my-1 uppercase'>trainess</h6>
      </div>

      <div className="ad  flex flex-col justify-center items-center my-3 md:my-6 mr-3 md:mr-9">
        <FontAwesomeIcon icon={faPerson} className='w-16 h-16 text-yellow-600 '  />
        <h5 className='total font-bold text-xl text-white  mt-2'>100+</h5>
        <h6 className='ad-title font-medium text-xs text-yellow-600 my-1 uppercase'>workouts</h6>
      </div>

      <div className="ad flex flex-col justify-center items-center my-3 md:my-6 mr-3 md:mr-9">
         <FontAwesomeIcon icon={faChalkboardUser} className='w-16 h-16 text-yellow-600 '  />
        <h5 className='total font-extrabold text-xl text-white mt-2'>60</h5>
        <h6 className='ad-title font-medium text-xs text-yellow-600 my-1 uppercase'>instructors</h6>
      </div>

      <div className="ad  md:flex md:flex-col md:justify-center md:items-center my-3 md:my-6 mr-3 md:mr-9">
        <FontAwesomeIcon icon={faDumbbell} className='w-16 h-16 text-yellow-600 '  />
        <h5 className='total font-extrabold text-xl text-white mt-2'>100%</h5>
        <h6 className='ad-title font-medium text-xs text-yellow-600 my-1 uppercase'>quality equipment</h6>
      </div>
    </div>
  )
}

export default Advert