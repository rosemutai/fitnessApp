import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormInputs = {
  firstName: string,
  lastName: string,
  email: string,
  phone: number
}

const Contact = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = data => console.log(data)

  return (
    <div className='w-full min-h-screen font-roboto bg-black/90 py-8'>
      <div className="flex rounded-md flex-col md:flex-row justify-between w-10/12 md:w-6/12 mx-auto
         h-[80vh] md:h-96 my-16 md:my-12">
        <div className="left-section bg-hero w-full md:w-2/5 h-1/4 md:h-[90%] my-auto py-8 bg-cover 
          rounded-t-md md:rounded-none opacity-60 bg-yellow-600"></div>
        <div className="right-section w-full md:w-3/5 h-3/4 md:h-full rounded-b-md md:rounded-none">
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full h-full flex-col justify-between bg-black rounded-r-md">
            <div className="firstname w-11/12 ml-2 flex flex-col">
              <div className="errors">
                {errors.firstName && <span className='text-red-500'>First Name is required</span>}
              </div>
              <input 
                type="text"  
                id="firstname" 
                autoComplete='off'
                className='w-full rounded-md mb-2 md:mb-4 border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2' 
                {...register("firstName", {required: true})} 
              />
              <label htmlFor="firstname-section" className='text-greyish peer-focus:text-yellow-600 
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>First Name</label>
            </div>

            <div className="lastname-section w-11/12 ml-2 flex flex-col">
              <div className="errors">
                {errors.lastName && <span className='text-red-500'>Last Name is required</span>}
              </div>
              <input 
                type="text" 
                id="lastname" 
                autoComplete='off'
                className='w-full mb-2 md:mb-4 rounded-md border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2'
                {...register("lastName", {required: true})} 
              />
              <label htmlFor="lastname" className='text-greyish peer-focus:text-yellow-600  
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700order-1'>Last Name</label>
            </div>

            <div className="email-section w-11/12 ml-2 flex flex-col">
              <div className="errors">
                {errors.email && <span className='text-red-500'>Email field is required</span>}
              </div>
              <input 
                type="email" 
                id="email" 
                autoComplete='off'
                className='w-full mb-2 md:mb-4 rounded-md mx-auto  border text-greyish bg-black py-2
                  border-x-black border-t-black border-b-yellow-600 shadow
                  shadow-yellow-600  focus:transition-all focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2'
                {...register("email", {required: true})} 
              />
              <label htmlFor="email" className='text-greyish peer-focus:text-yellow-600  
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>Email</label>
            </div>

            <div className="phone-section w-11/12 ml-2 flex flex-col">
              <div className="errors">
                {errors.phone && <span className='text-red-500'>Invalid phone number</span>}
              </div>
              <input 
                type="tel"
                id="phone" 
                autoComplete='off'
                className='w-full mb-2 md:mb-4 rounded-md mx-auto border text-greyish bg-black
                  border-x-black border-t-black border-b-yellow-600 shadow py-2
                  shadow-yellow-600  focus:transition-all focus:delay-200 focus:ease-in focus:duration-700 focus:outline-0
                  focus:border-b-greyish/40 focus:shadow-greyish/40 focus:shadow-inner peer order-2' 
                {...register("phone", {minLength:10, maxLength:10})}
              />
              <label htmlFor="firstname" className='text-greyish peer-focus:text-yellow-600 
                peer-focus:transition-all peer-focus:ease-in peer-focus:duration-700 order-1'>Phone</label>
              
            </div>
            <div className="submit-btn w-11/12 ml-2 ">
              <button className='text-white p-2 md:p-1 text-sm rounded-md w-1/2 ml-24 tracking-wider uppercase
                border-2 border-transparent bg-yellow-600 mb-5 md:mb-4 md:mt-4 hover:border-yellow-600 
                hover:bg-black focus:transition-all focus:ease-in focus:duration-700 focus:delay-100'>
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