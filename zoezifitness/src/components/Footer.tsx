import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer p-4 flex flex-col md:flex-row justify-center md:justify-around 
      bg-yellow-600 text-white relative'>
      <div className="col-one flex flex-col">
        <h5 className='ml-1'>Zoezi Fitiness</h5>
        <div className='adress-email flex flex-col '>
          
            <div className='flex my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 
                  11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                />
              </svg>
              <p className='font-roboto text-sm font-normal not-italic ml-2'>P.O Box 564, Disneyland</p>
            </div>

            <div className='flex md:my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183
                  1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0
                  0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 
                  2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134
                  0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <p className='font-roboto not-italic text-sm font-normal ml-2'>zoezifness@gmail.com</p>  
            </div>
        </div>

      </div>

      <div className="col-two flex justify-between mt-4 md:mt-0 mb-14 md:mb-5">
        <div className="col-two-one md:mr-8">
          <h5 className='mb-2 font-bold tracking-wider'>community</h5>
          <ul>
            <li className='mb-2'>Trainees</li>
            <li className='mb-2'>Partners</li>
            <li className='mb-2'>Developers</li>
            <li className='mb-2'>Blog</li>
          </ul>
        </div>

        <div className="col-two-two md:mr-8">
          <h5 className='mb-2 font-bold tracking-wider'>Information</h5>
          <ul>
            <li className='mb-2'>About</li>
            <li className='mb-2'>Pricing</li>
            <li className='mb-2'>Blog</li>
            <li className='mb-2'>Careers</li>
            <li className='mb-2'>FAQs</li>
            <li className='mb-2'>Contact</li>
          </ul>
        </div>

        <div className="col-two-three md:mr-8 mb-16 ">
          <h5 className='mb-2 font-bold tracking-wider'>More</h5>
          <ul>
            <li className='mb-2'>Investors</li>
            <li className='mb-2'>Terms</li>
            <li className='mb-2'>Privacy</li>
            <li className='mb-2'>Help</li>
          </ul>
        </div>

        <div className="name w-10/12 md:w-3/4 mx-auto absolute z-50 bottom-0 inset-x-12 py-2 bg-black rounded-sm
          shadow shadow-yellow-600 px-4 md:flex md:justify-between md:items-center">
          <p className=' text-white font-light tracking-wider text-sm text-center'>copyright &copy; 2022 zoezifitiness</p>

           <div className='social-icons flex justify-center md:justify-between mt-2 md:mt-0'>
            <div className="facebook mr-3">
              <FontAwesomeIcon icon={faFacebook}/>
            </div>

            <div className="twitter  mr-3">
              <FontAwesomeIcon icon={faTwitter}/>
            </div>

            <div className="instagram  mr-3">
              <FontAwesomeIcon icon={faInstagram}/>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer