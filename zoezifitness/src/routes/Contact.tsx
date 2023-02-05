import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen font-roboto bg-black/90 py-8'>
      <div className="flex flex-col md:flex-row justify-between w-10/12 md:w-6/12 mx-auto h-96 my-12">
        <div className="left-section bg-hero w-full md:w-2/5 md:h-8/12 my-2 py-8 bg-cover opacity-60 bg-yellow-600"></div>
        <div className="right-section w-full md:w-3/5 h-full">
          <form className="flex w-full h-full flex-col justify-between bg-black rounded-r-md">
            <div className="firstname w-11/12 ml-2 flex flex-col">
              <input type="text" name="firstname" id="firstname" autoComplete='off'
                className='w-full rounded-md mb-4 border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2'  
              />
              <label htmlFor="firstname-section" className='text-greyish peer-focus:text-yellow-600 
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>First Name</label>
            </div>

            <div className="lastname-section w-11/12 ml-2 flex flex-col">
              <input type="text" name="lastname" id="lastname" autoComplete='off'
                className='w-full mb-4 rounded-md border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2'
              />
              <label htmlFor="lastname" className='text-greyish peer-focus:text-yellow-600  
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700order-1'>Last Name</label>
            </div>

            <div className="email-section w-11/12 ml-2 flex flex-col">
              <input type="email" name="email" id="email" autoComplete='off'
                className='w-full rounded-md mx-auto mb-4 border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2' 
              />
              <label htmlFor="email" className='text-greyish peer-focus:text-yellow-600  
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>Email</label>
            </div>

            <div className="phone-section w-11/12 ml-2 flex flex-col">
              <input type="tel" name="phone" id="phone" autoComplete='off'
                className='w-full rounded-md mx-auto mb-4 border text-greyish bg-black
                  border-x-black border-t-black border-b-yellow-600 shadow py-2
                  shadow-yellow-600  focus:transition-all focus:delay-200 focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2' 
              />
              <label htmlFor="firstname" className='text-greyish peer-focus:text-yellow-600 
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>Phone</label>
              
            </div>

            <div className="submit-btn w-11/12 ml-2 ">
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