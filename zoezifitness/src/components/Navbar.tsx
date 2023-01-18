import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <div className='w-full h-full'>
      <div className='top-nav md:flex md:flex-col md:justify-between'>
        <div className="address md:w-full md:flex md:justify-evenly py-3 text-normal text-white bg-yellow-600">
          <div className='adress-email '>
            <address className='locatio-adress md:flex md:justify-between'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 
                    11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                  />
              </svg>
              <span className='font-roboto text-sm font-normal not-italic md:ml-2'>P.O Box 564, Disneyland</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4 md:ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183
                  1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0
                  0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 
                  2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134
                  0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <span className='font-roboto not-italic text-sm font-normal md:ml-2'>zoezifness@gmail.com</span>

            </address>
          </div>
          <div className='social-icons md:flex md:justify-between'>
            <div className="facebook md:mr-3">
              <FontAwesomeIcon icon={faFacebook}/>
            </div>

            <div className="twitter  md:mr-3">
              <FontAwesomeIcon icon={faTwitter}/>
            </div>

            <div className="instagram  md:mr-3">
              <FontAwesomeIcon icon={faInstagram}/>
            </div>

          </div>
        </div>
        <div className="banner md:h-64 md:relative bg-black md:pt-5">
          <nav className='navigation md:flex md:justify-around  md:py-3 text-white bg-black'>
            <h2 className="logo border-b-2 border-b-yellow-600 md:-ml-10">zoeziFitness</h2>
            <ul className="nav-links md:flex md:justify-between">
              <li><a href='#home' className='md:mr-3 font-roboto text-base'>Home</a></li>
              <li><a href='#about' className='md:mr-3 font-roboto text-base'>About</a></li>
              <li><a href='#contact' className='md:mr-3 font-roboto text-base'>Contact Us</a></li>
              <li><a href='#services' className='md:mr-3 font-roboto text-base'>Services</a></li>
              
            </ul>
          </nav>
          <div className='ad md:flex md:flex-col m md:h-80 bg-black'>
            <div className='md:relative'>
              <h1 className='huge-ad md:text-6xl font-bold md:absolute md:left-45 md:top-0  text-white  md:ml-28 md:my-8'>
                Power house gym, come 
              </h1>
              <h1 className='huge-ad md:text-6xl font-bold md:absolute md:left-45 md:top-16 text-white  md:ml-28 md:my-8'>
                train <span className='text-yellow-600'>With Us.</span>
              </h1>
            </div>
            <div className=" md:w-10/12 btn-description md:flex md:flex-col md:justify-around md:absolute md:left-20 
              md:top-60 md:mt-3">
              <div className="description md:ml-28 md:w-1/2">
                <p className='text-greyish/80 text-sm  '>Get your body goals by training with us 
                </p>
              </div>
              <div className='button  md:ml-28 md:py-6'>
                <button className='text-white bg-yellow-600 md:py-2 md:px-5 tracking-widerst rounded-3xl uppercase'>
                  Lets talk
                </button>
              </div>
             
            </div>
          </div>
        </div>
        <div className="image bg-hero md:mt-85 bg-yellow-600 md:h-96 bg-no-repeat
          bg-cover bg-center w-full hover:transition-opacity"></div>

      </div>

      
    </div>
  )
}

export default Navbar