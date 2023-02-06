import React from 'react'
import Instructors from '../components/Instructors'

const About = () => {
  return (
    <div className='about-us w-full h-screen bg-black'>
      <div className="about-description">
        <h2 className='text-white border border-t-transparent  border-x-transparent border-b-yellow-600 
        w-6/12 md:w-3/12 mx-auto tracking-widest pt-4  text-center'>Get to Know Us</h2>
        <p className='text-white w-10/12 md:w-5/12 my-4 bg-black/90 p-4
          mx-auto rounded-md shadow-md shadow-yellow-600 leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tenetur ipsum, enim perferendis incidunt libero ea corrupti omnis 
          minus eveniet voluptates? Consectetur libero commodi quas id voluptatem 
          magnam ipsa quibusdam reiciendis nisi dolores facilis illum, dignissimos 
          laborum officia qui beatae labore perspiciatis corporis architecto pariatur perferendis 
          eos nulla! Amet pariatur reiciendis repellat quae itaque. Ex minima ullam, 
          magnam asperiores culpa tempore!
        </p>
      </div>
      <div className="instructors">
        <Instructors />
      </div>
    </div>
  )
}

export default About