import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen font-roboto bg-black/90 py-8'>
      <div className="flex justify-between md:w-6/12 mx-auto h-96 my-12">
        <div className="left-section bg-hero w-2/5 h-8/12 my-2 py-8 bg-cover opacity-60 bg-yellow-600"></div>
        <div className="right-section w-3/5 h-full">
          <form className="flex w-full h-full flex-col justify-between bg-black rounded-r-md">
            <div className="firstname w-11/12 ml-2">
              <label htmlFor="firstname-section" className='text-greyish'>First Name</label>
              <input type="text" name="firstname" id="firstname" autoComplete='off'
                className='w-full rounded-md mb-2 border text-white bg-black py-1
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner'  
              />
            </div>

            <div className="lastname-section w-11/12 ml-2">
              <label htmlFor="lastname" className='text-greyish'>Last Name</label>
              <input type="text" name="lastname" id="lastname" autoComplete='off'
                className='w-full mb-2 rounded-md border text-greyish bg-black py-1
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner'
              />
            </div>

            <div className="email-section w-11/12 ml-2">
              <label htmlFor="email" className='text-greyish'>Email</label>
              <input type="email" name="email" id="email" autoComplete='off'
                className='w-full rounded-md mx-auto mb-2 border text-white bg-black py-1
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner' 
              />
            </div>

            <div className="phone-section w-11/12 ml-2">
              <label htmlFor="firstname" className='text-greyish'>Phone</label>
              <input type="tel" name="phone" id="phone" autoComplete='off'
                className='w-full rounded-md mx-auto mb-2 border text-greyish bg-black py-1
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner' 
              />
            </div>

            <div className="submit-btn w-11/12 ml-2">
              <button className='text-white p-1 text-sm rounded-md w-1/2 ml-24 tracking-wider uppercase
                border-2 border-transparent bg-yellow-600 my-4 hover:border-yellow-600 hover:bg-black
                focus:transition-all focus:ease-in focus:duration-700 focus:delay-100'>
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