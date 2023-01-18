import React from 'react'
import woman from '../images/woman.jpg'


// add a carousel here to display various testimonies
const Testimonies = () => {


  return (
    <div className='md:w-7/12 md:h-80  md:mx-auto md:my-9 bgyellow-600 md:flex rounded-t-md'>
      <div className="image  md:w-1/2 relative mr2">
        <img src={woman} className='rounded-l-md min-w-full max-h-full opacity70 ' alt="woman working out"  />
        <div className="name w-3/4 mx-auto absolute z-50 -bottom-4 left-8 py-2 bg-yellow-600 rounded-sm
          shadow shadow-yellow-600">
          <p className='text-center text-white tracking-wider text-sm'>Clara Richards</p>
        </div>
      </div>
      <div className="left md:w-1/2 m2 bglack rounded-r-md px-4">
        <h5 className='md:text-2xl text-greyish'>Successful Trainer</h5>
        <h5 className='md:text-xl text-yellow-600'>Feedback</h5>
        <p className='text-greyish text-sm my-5 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat veritatis quis aut quam veroqui suscipit qui, animi voluptatibus. 
          Error ipsam fugit cupiditate ex illo, consequuntur culpa.
          Pariatur omnissuscipit, exercitationem quam obcaecati suscipit quisuscipit.
        </p>
        <h5 className='md:text-sm mt-10 text-yellow-600'>The training Clara has taken</h5>
        <div className="name w-full mt-3  bg-black -600 rounded-sm flex">
          <img src={woman} className=' w-12 h-12' alt="woman working out"  />
          <p className='text-center pt-3 ml-4 text-white tracking-wider text-sm'>Hands, thigh and shoulder workouts</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonies