import React from 'react'
import mail from '../images/mesage.png'

const Subscribe = () => {
  return (
     <div className='w-11/12 md:w-7/12 h-80  mx-auto mt-2 mb-12 flex justify-between md:justify-center rounded-t-md'>
      <div  className="imagee w-1/2">
        <img src={mail} className='mt-16 -ml-2 md:ml-0 md:mt-0' alt="email notification" />
      </div>
      <div className="rightt w-1/2 flex flex-col justify-center">
        <h5 className='text-xs md:text-sm text-yellow-600 upper'>subscribe now</h5>
        <h4 className='text-sm md:text-xl text-greyish/80 my-2 font-medium'>Get every single update</h4>
        <form className='mt-1 md:mt-4 flex flex-col md:flex-row'>
          <input type="email" name="email" className='bg-black/90 border border-greyish py-1 px-3 w-full md:w-9/12
            placeholde:text-white placeholder:text-xs rounded-md' placeholder='Enter your email'/>
          <button className='text-white p-1  bg-yellow-600 text-sm md:ml-2 rounded-md
            border-2 border-transparent hover:bg-black/90 hover:border-yellow-600 mt-2 md:mt-0'>subscribe</button>
        </form>
        
      </div>
    </div>
  )
}

export default Subscribe