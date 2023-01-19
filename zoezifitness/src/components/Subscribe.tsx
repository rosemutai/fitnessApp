import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import mail from '../images/maill.jpg'

const Subscribe = () => {
  return (
     <div className='md:w-7/12 md:h-80  md:mx-auto md:mt-14 mb-5 bgyellow-600 md:flex md:justify-center rounded-t-md'>
      <div className="image  md:w1/2 relative ">
        <FontAwesomeIcon icon={faArrowDown} className='text-3xl absolute -top-1 left-16 mt-4 w-16 h-16 text-white ' />
        <FontAwesomeIcon icon={faEnvelope} className='text-3xl w-24 h-24 text-white p-14  rounded-full bg-yellow-600' />
        
      </div>
      <div className="left md:w1/2 md:ml-7  bglack rounded-r-md ">
        <h5 className='md:text-sm mt-10 text-yellow-600 upper'>subscribe now</h5>
        <h4 className='md:text-2xl text-greyish my-2 font-medium'>Get every single update</h4>
        <form className='mt-4'>
          <input type="email" name="email" className='bg-black/90 border border-greyish py-1 px-3
            placeholde:text-white' placeholder='Enter your email'/>
          <span><button className='text-white py-1.5 px-3 bg-yellow-600 text-sm'>subscribe now</button></span>
        </form>
        
      </div>
    </div>
  )
}

export default Subscribe