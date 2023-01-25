import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight, faChevronLeft,  faCircle } from '@fortawesome/free-solid-svg-icons'
import woman from '../images/woman.jpg'
import alex from '../images/alex.jpg'

type userType = {
  image: string,
  name: string,
  description: string,
  imageOfExercise: string,
  titleOfExercise: string
}
// add a carousel here to display various testimonies
const Testimonies = () => {

  const usersTrained: userType[] = [
    {
      image: alex,
      name: 'Alexa Kariuki',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat veritatis quis aut quam veroqui suscipit qui, animi voluptatibus. 
          Error ipsam fugit cupiditate ex illo, consequuntur culpa.`,
      imageOfExercise: alex,
      titleOfExercise: 'Leg workout'

    },

    {
      image: woman,
      name: 'Clara Rodney',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat veritatis quis aut quam veroqui suscipit qui, animi voluptatibus. 
          Error ipsam fugit cupiditate ex illo, consequuntur culpa.`,
      imageOfExercise: woman,
      titleOfExercise: 'Thighs  workout'

    }

  ]

  const [ currentIndex, setCurrentIndex] = useState(0)

  const previousSlide = () => {
    const isFirstIndex = currentIndex === 0
    const newIndex = isFirstIndex ? usersTrained.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastIndex = currentIndex === usersTrained.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) =>{
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='w-11/12 md:w-7/12 h-80 mx-auto md:mb-12 bgyellow-600 flex 
      mt-24 md:-mt-60 lg:-mt-2 rounded-t-md group' id='testimonies'>
      <>
        <div className="left-side image bg-no-repeat bg-cover w-1/2 relative"
          style={{backgroundImage: `url(${usersTrained[currentIndex].image})`}} >
          <div className="name w-3/4 mx-auto absolute z-50 -bottom-4 left-8 py-2 bg-yellow-600 rounded-sm
            shadow shadow-yellow-600">
            <p className='text-center text-white tracking-wider text-sm'>{usersTrained[currentIndex].name}</p>
          </div>

          <FontAwesomeIcon icon={faChevronLeft} onClick={previousSlide} className="arrow hidden group-hover:block 
            text-3xl absolute z-50 top-2/4 left-4 py-2  text-yellow-600 rounded-sm cursor-pointer" 
          />

          <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} className="arrow text-3xl hidden group-hover:block 
            absolute z-50 top-2/4 right-4 py-2  text-yellow-600 rounded-sm cursor-pointer"
          />

          <div className="dots absolute -bottom-12 inset-x-2/4 flex">
            {usersTrained.map((slide, slideIndex) => {
              return (
                <FontAwesomeIcon key={slideIndex} onClick={() => goToSlide(slideIndex)} icon={faCircle} 
                  className='text-xs md:text-sm text-yellow-600 mr-1 md:mr-3 cursor-pointer' />
              )
            })}
          </div>
        </div>
        <div className="right-side w-1/2 rounded-r-md px-2 md:px-4">
          <h5 className='md:text-2xl text-greyish'>Successful Trainer</h5>
          <h5 className='text-sm md:text-xl text-yellow-600'>Feedback</h5>
          <p className='text-greyish text-sm my-5 leading-5 md:leading-6'>{usersTrained[currentIndex].description}</p>
          <h5 className='text-xs md:text-sm tracking-wide mt-1 md:mt-10 text-yellow-600'>{`The training ${usersTrained[currentIndex].name} has taken`}</h5>
          <div className="name w-full mt-1 md:mt-3  bg-black -600 rounded-sm flex">
            <img src={usersTrained[currentIndex].imageOfExercise} className=' w-12 h-12' alt="woman working out"  />
            <p className='text-center pt-3 ml-4 text-white tracking-wider text-sm'>{usersTrained[currentIndex].titleOfExercise}</p>
          </div>
          
        </div>

        
      </>
    </div>
  )
}

export default Testimonies