import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen font-roboto bg-black/90 py-8'>
      <div className="flex justify-between md:w-6/12 mx-auto h-96 my-12">
        <div className="left-section bg-hero w-2/5 h-8/12 my-2 py-8 bg-cover opacity-60 bg-yellow-600"></div>
        <div className="right-section w-3/5 h-full">
          <form className="flex w-full h-full flex-col justify-between bg-black rounded-r-md">
            <div className="firstname w-11/12 ml-2">
              <label htmlFor="firstname-section" className='text-yellow-600'>First Name</label>
              <input type="text" name="firstname" id="firstname" 
                className='w-full rounded-md mb-2 border border-yellow-600  text-wite bg-black py-1
                  focus:outline-0'  
              />
            </div>

            <div className="lastname-section w-11/12 ml-2">
              <label htmlFor="lastname" className='text-yellow-600'>Last Name</label>
              <input type="text" name="lastname" id="lastname" 
                className='w-full mb-2 rounded-md border border-yellow-600  text-wite bg-black py-1
                  focus:outline-0' 
              />
            </div>

            <div className="email-section w-11/12 ml-2">
              <label htmlFor="email" className='text-yellow-600'>Email</label>
              <input type="email" name="email" id="email" 
                className='w-full rounded-md mx-auto mb-2 border border-yellow-600  text-wite bg-black py-1
                  focus:outline-0' 
              />
            </div>

            <div className="phone-section w-11/12 ml-2">
              <label htmlFor="firstname" className='text-yellow-600'>Phone</label>
              <input type="tel" name="phone" id="phone" 
                className='w-full rounded-md mx-auto mb-2 border bg-black border-yellow-600 py-1
                  focus:outline-0' 
              />
            </div>

            <div className="submit-btn w-11/12 ml-2">
              <button className='text-white p-1 text-sm rounded-md w-full tracking-wide
                border-2 border-transparent bglack 90 bg-yellow-600 mb-2'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact