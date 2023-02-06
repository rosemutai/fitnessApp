import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-red-600 mt-4'>
      <div className="heading">
        <h4 className='text-white border border-t-transparent  border-x-transparent border-b-yellow-600 
        w-6/12 md:w-3/12 mx-auto tracking-widest pt-4  text-center'>Our Prices</h4>
      </div>
      <div className='w-11/12 mx-auto flex flex-wrap justify-center mt-8 bg-black b-10'>
        <div className="ad  flex flex-col justify-center items-center  mr-3 md:mr-9 bg-yellow-600
          rounded-tr-3xl rounded-bl-3xl h-72 w-60 shadow shadow-yellow-600 group hover:opacity40 ">
          <h6 className='ad-title text-white font-bold text-xl uppercase'>ksh. 1500</h6>
          <p className='text-sm text-greyish'>Monthly recurring payment</p>
          <ul className='text-white text-sm list-inside list-disc'>
            <li className='mb-2'>Cardio, Weights, & Machines</li>
            <li className='mb-2'>Locker Rooms with Showers</li>
            <li className='mb-2'>CrunchONE Kickoff</li>
            <li className='mb-2'>Online Nutrition</li>
            <li className='mb-2'>Free Wi-Fi</li>
              
          </ul>
        </div>

        <div className="ad  flex flex-col justify-center items-center   mr-3 md:mr-9 bg-yellow-600
          rounded-tr-3xl rounded-bl-3xl h-72 w-60  shadow shadow-yellow-600 group hover:opacity40 ">
          <h6 className='ad-title font-medium text-xs text-white my-4 uppercase'>ksh. 2500</h6>
          <p className='text-sm text-greyish'>Monthly recurring payment</p>
          <ul className='text-white text-sm list-inside list-disc'>
            <li className='mb-2'>Cardio, Weights, & Machines</li>
            <li className='mb-2'>Locker Rooms with Showers</li>
            <li className='mb-2'>CrunchONE Kickoff</li>
            <li className='mb-2'>Online Nutrition</li>
            <li className='mb-2'>Power Half Hour Circuit Training</li>
            <li className='mb-2'>Free Wi-Fi</li>
              
          </ul>

        </div>

        <div className="ad  flex flex-col justify-center items-center  mr-3 md:mr-9 bg-yellow-600
          rounded-tr-3xl rounded-bl-3xl h-72 w-60  shadow shadow-yellow-600 group hover:opacity40 ">
          <h6 className='ad-title font-medium text-xs text-white my-4 uppercase'>ksh. 4000</h6>
          <p className='text-sm text-greyish'>Monthly recurring payment</p>
          <ul className='text-white text-sm list-inside list-disc'>
            <li className='mb-2'>Cardio, Weights, & Machines</li>
            <li className='mb-2'>Locker Rooms with Showers</li>
            <li className='mb-2'>CrunchONE Kickoff</li>
            <li className='mb-2'>Online Nutrition</li>
            <li className='mb-2'>Power Half Hour Circuit Training</li>
            <li className='mb-2'>Free Wi-Fi</li>
            <li className='mb-2'>Free On-Site Parking</li>
            <li className='mb-2'>Group Fitness Classes</li>
              
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Pricing