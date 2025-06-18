import React from 'react'

const Footer = () => {
  return (
    <div className='pt-24 pb-16 bg-black text-white'>
      <div></div>
      <div className=' flex flex-col justify-center items-center px-8 md:px-24 gap-4'>
        <div><h1 className='text-4xl md:text-6xl md:font-extrabold font-bold'>LET’S TALK!</h1></div>
        <div className='flex flex-row md:pt-6'>
          <h3 className='md:text-xl '>rehanurraihan@gmail.com</h3>
           <i className="ri-arrow-right-up-line"></i>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 mt-12 md:mt-0 '>
          <h6>© Rehan Raihan - 2023</h6>
          <div className='flex flex-row gap-4'>
            <h6>Dribble</h6>
            <h6>Behance</h6>
            <h6>Twitter</h6>
            <h6>Instagram</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer