import React from 'react'
import image2 from '../images/tt.jpg'
import image1 from '../images/dd.jpg'
import image3 from '../images/cc.jpg'
import image4 from '../images/bbb.jpg'
import Footer from './Footer'

type AdType = {
  id: number,
  imageSrc: string,
  name: string,
  
}

const instructors: AdType[] =[
  {
    id: 1,
    imageSrc: image2,
    name: 'Jane Kyles',
    
  },

  {
    id: 2,
    imageSrc: image3,
    name: 'Peter David'
  },

  {
    id: 1,
    imageSrc: image1,
    name: 'Robert Blackish'
  },

  {
    id: 1,
    imageSrc: image4,
    name: 'Jackie Enids'
  }

]

const Instructors = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-black'>
      <div className="heading">
        <h4 className='text-white border border-t-transparent  border-x-transparent border-b-yellow-600 
        w-6/12 md:w-3/12 mx-auto tracking-widest pt-4  text-center'>Meet our Team</h4>
      </div>
      <div className='w-11/12 mx-auto flex flex-wrap justify-center my-8 bg-black b-10'>
      {instructors.map((instructor) => (
        <div className="ad  flex flex-col justify-center items-center my-3 md:my-6 mr-3 md:mr-9 bg-black/90 600
          rounded-tr-3xl rounded-bl-3xl h-60 w-52 shadow shadow-yellow-600 group hover:opacity40 ">
          <img src={instructor.imageSrc} className='w-36 h-36 rounded-full group-hover:scale-110 hover:transition-all
            hover:ease-out hover:delay-150 hover:duration-1000' alt="ad" />
          <h6 className='ad-title font-medium text-xs text-white my-4 uppercase'>{instructor.name}</h6>
        </div>

      ))}
    </div>
    <Footer/>
    </div>
    
  )
}

export default Instructors