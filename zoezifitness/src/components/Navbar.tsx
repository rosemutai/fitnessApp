import React, { Fragment, useState} from 'react'
import { motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className='w-full h-full'>
      <div className='top-nav flex flex-col justify-between'>
        <div className="address w-full flex flex-col md:flex-row justify-evenly py-3 text-normal 
        text-white bg-yellow-600">
          <div className='adress-email '>
            <address className='locatio-adress flex justify-between px-3 md:px-0'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 
                    11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
                  />
              </svg>
              <span className='font-roboto text-sm font-normal not-italic -ml-5 md:ml-2'>P.O Box 564, Disneyland</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="currentColor" className="w-4 h-4 md:ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183
                  1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0
                  0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 
                  2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134
                  0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <span className='font-roboto not-italic text-sm font-normal -ml-5 md:ml-2'>zoezifness@gmail.com</span>

            </address>
          </div>
          <div className='social-icons hidden md:flex justify-center md:space-x-2 py-4 md:py-0  md:justify-between'>
            <div className="facebook md:mr-1">
              <FontAwesomeIcon className='hover:scale-110 text-white hover:transition cursor-pointer 
                hover:rounded-full hover:animate-shine hover:shadow-md hover:shadow-white  hover:text-white'
                icon={faFacebook}/>
            </div>

            <div className="twitter  md:mr-4">
              <FontAwesomeIcon className='hover:scale-110 text-white hover:transition cursor-pointer 
                hover:rounded-full hover:animate-shine hover:shadow-md hover:shadow-white  hover:text-white'
                icon={faTwitter}/>
            </div>

            <div className="instagram">
              <FontAwesomeIcon className='hover:scale-110 text-white hover:transition cursor-pointer 
                hover:rounded-full hover:animate-shine hover:shadow-md hover:shadow-white  hover:text-white'
                icon={faInstagram}/>
            </div>

          </div>
        </div>
        <div className="banner md:h-64 md:relative bg-black md:pt-5">
          <nav className='navigation md:flex md:justify-around  md:py-3 text-white bg-black'>
            <div className="logo-hamburger flex justify-between p4">
              <h2 className="logo  md:ml-6 p-4">zoeziFitness</h2>
              {
                isShowing ? (
                  <FontAwesomeIcon 
                    icon={faTimes} 
                    className='md:hidden h-6 w-6 p-4 text-yellow-600'
                    onClick={() => setIsShowing((isShowing) => !isShowing)} 
                  />
                ) : (
                  <FontAwesomeIcon 
                    icon={faBars} 
                    className='md:hidden h-6 w-6 p-4'
                    onClick={() => setIsShowing((isShowing) => !isShowing)} 
                  />
                )
              }
              <Transition className='md:hidden w-full h-full bg-black z-50 absolute top-24 flex flex-col
                justify-evenly items-center'
                show={isShowing}
                enter="transition-opacity duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >

                <Link to='/'  className='md:mr-4 font-roboto text-base hover:ease-in
                   hover:duration-200  transition-all duration-75 hover:text-yellow-600'>Home</Link>
                <Link to='about/' className='md:mr-4 font-roboto text-base 
                  hover:ease-in hover:duration-200  transition-all duration-75 hover:text-yellow-600'>About</Link>
                
                <Link href='#about' className='md:mr-4 font-roboto text-base hover:ease-in hover:duration-200
                  transition-all duration-75 hover:text-yellow-600'>Pricing</Link>
                
              <Link to='testimonies' spy={true} smooth={true} offset={-100} duration={500} className='md:mr-4 
                font-roboto text-base hover:ease-in hover:duration-200  transition-all duration-75 hover:text-yellow-600 
                cursor-pointer'>Testimonies</Link>
              <Link to='/contact' className='md:mr-4 font-roboto text-base hover:ease-in 
                hover:duration-200  transition-all duration-75 hover:text-yellow-600'>Contact Us</Link>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black 
                      bg-opacity-20  font-roboto text-base  hover:bg-opacity-30 focus:outline-none
                      focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-yellow">
                      Services
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -right-24 mt-2 w-52 origin-top-right flex flex-col items-center
                      rounded-md bg-yellow-600 shadow-lg  focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          <button>Body building</button> 
                        </Menu.Item>
                        
                      </div>
                      <hr className='w-11/12 mx-1 bg-yellow-600/60' />
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          <button>Yoga</button> 
                        </Menu.Item>
                      </div>
                      <hr className='w-11/12 mx-1 bg-white/80' />
                      <div className="px-1 py-1">
                        <Menu.Item>
                          <button> Aerobic exercises</button>
                        </Menu.Item>
                      </div>
                      <hr className='w-11/12 mx-1 bg-white/80' />
                      <div className="px-1 py-1">
                        <Menu.Item>
                            <button>Arms workout</button>
                        </Menu.Item>
                      </div>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              </Transition>
            </div>
            <div className="nav-links hidden md:flex md:justify-between">
              <Link href='#home' className='md:mr-4 font-roboto text-base hover:ease-in 
                hover:duration-200  transition-all duration-75 hover:text-yellow-600'>Home</Link>
              <Link href='#about' className='md:mr-4 font-roboto text-base hover:ease-in 
                hover:duration-200  transition-all duration-75 hover:text-yellow-600'>About</Link>
              <Link href='#about' className='md:mr-4 font-roboto text-base hover:ease-in
                hover:duration-200  transition-all duration-75 hover:text-yellow-600'>Pricing</Link>
              <Link to='testimonies' spy={true} smooth={true} offset={-100} duration={500} className='md:mr-4 
                 font-roboto text-base hover:ease-in hover:duration-200  transition-all
                 duration-75 hover:text-yellow-600 cursor-pointer'>Testimonies</Link>
              <Link href='#contact' className='md:mr-4 font-roboto text-base hover:ease-in 
                hover:duration-200  transition-all duration-75 hover:text-yellow-600'>Contact Us</Link>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black 
                      bg-opacity-20  font-roboto text-base  hover:bg-opacity-30 focus:outline-none
                      focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-yellow-600">
                      Services
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -right-24 mt-2 w-52 origin-top-right flex flex-col items-center
                      rounded-md bg-yellow-600 shadow-lg  focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          <button>Body building</button> 
                        </Menu.Item>
                        
                      </div>
                      <hr className='w-11/12 mx-1 bg-yellow-600/60' />
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          <button>Yoga</button> 
                        </Menu.Item>
                      </div>
                      <hr className='w-11/12 mx-1 bg-white/80' />
                      <div className="px-1 py-1">
                        <Menu.Item>
                          <button> Aerobic exercises</button>
                        </Menu.Item>
                      </div>
                      <hr className='w-11/12 mx-1 bg-white/80' />
                      <div className="px-1 py-1">
                        <Menu.Item>
                            <button>Arms workout</button>
                        </Menu.Item>
                      </div>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              
            </div>
          </nav>
          <div className='ad md:flex md:flex-col h-64 md:h-80 bg-black'>
            <div className='relative'>
              <h1 className='huge-ad text-2xl md:text-6xl font-bold absolute left-4 md:left-45 top-0  text-white
                lg:ml-28 md:ml-16 my-4 md:my-8'>
                Power house gym, come 
              </h1>
              <h1 className='huge-ad text-2xl md:text-6xl font-bold absolute md:left-45 top-6 md:top-16 
              text-white left-4 lg:ml-28 md:ml-16 my-6 md:my-8'>
                train <span className='text-yellow-600'>With Us.</span>
              </h1>
            </div>
            <div className=" md:w-10/12 btn-description md:flex md:flex-col md:justify-around absolute left-4 lg:left-20 
              md:left-7 top-52 md:top-60 md:mt-10 ">
              <div className="description md:ml-28 md:w-1/2">
                <p className='text-greyish/80 text-sm  '>Get your body goals by training with us 
                </p>
              </div>
              <div className='button  md:ml-28 py-6'>
                <motion.button 
                  className='text-white border-2 border-black bg-yellow-600 py-2 
                  px-5 tracking-widerst rounded-3xl uppercase hover:bg-black hover:border-yellow-600'
                  whileHover={{ transition: { duration: 4}, }}
                >
                  Lets talk
                </motion.button>
              </div>
             
            </div>
          </div>
        </div>
        <div className="image bg-hero md:mt-85 bg-yellow-600 md:h-96 bg-no-repeat
          bg-cover bg-center w-full hover:opacity-30 hover:transition-opacity"></div>

      </div>

      
    </div>
  )
}

export default Navbar