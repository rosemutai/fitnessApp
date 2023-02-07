import React from 'react'
import image1 from '../images/fitness1.jpg'
import image2 from '../images/alex.jpg'
import image3 from '../images/tyler.jpg'
import image4 from '../images/victor.jpg'
import image5 from '../images/fitness2.jpg'

type PhotoType = {
  id: number,
  imgSrc: string,
  style: string,
  title: string,
  description: string,
}

const Services = () => {

  const cardImages : PhotoType[] = [
    {
      id: 1,
      imgSrc: image1,
      title: 'Arms Workout',
      description: 'Get the best Arms Workout',
      style: 'shadow-brown-400' 
    },

    {
      id: 6,
      imgSrc: image5,
      title: 'Hands Workout',
      description: 'Get the best hands Workout',
      style: 'shadow-gray-100' 
    },

    {
      id: 2,
      imgSrc: image2,
      title: 'Thighs Workout',
      description: 'Get the best thighs Workout',
      style: 'shadow-gray-400' 
    },

    {
      id: 3,
      imgSrc: image3,
      title: 'Legs Workout',
      description: 'Get the best Legs Workout',
      style: 'shadow-gray-200' 
    },

    {
      id: 4,
      imgSrc: image4,
      title: 'Shoulder Workout',
      description: 'Get the best shoulder Workout',
      style: 'shadow-gray-400' 
    },

    {
      id: 5,
      imgSrc: image5,
      title: 'Hands Workout',
      description: 'Get the best hands Workout',
      style: 'shadow-gray-100' 
    }
  ]


  return (
    <div className='w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-6 h-screen bg-black0'>
      <h2 className='text-white border border-t-transparent  border-x-transparent border-b-yellow-600 
        w-6/12 md:w-6/12 mx-auto tracking-widest pt-4 mb-6  text-center'>Top featured Workouts</h2>
      <div className="cards md:w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {cardImages.map(({id, imgSrc, title, description, style}) => (
          <div key={id} className={ `card flex flex-col justify-start 
            md:w-56 md:h-56  rounded-md border border-greyish/40 ${style}`} >
            <img src={imgSrc} className='h-3/4 ull' alt='card' />
            <h4 className='card-title px-2 text-yellow-600'>{title}</h4>
            <p className='littele-desc px-2 text-greyish/80'>{description}</p>
          </div>

        ))}
      
      </div>
    </div>
  )
}

export default Services