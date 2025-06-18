import React from 'react'
import Ellipse from '../assets/Ellipse.png'

const Card = (props,className='') => {
    return (
        <>

            <div style={{ backgroundImage: `url(${Ellipse})` }} className='bg-[#CBCBCB7A] bg-cover bg-center  w-full p-4 md:p-8 rounded-4xl md:rounded-[3rem] flex flex-col md:flex-row justify-center  gap-8'>
                <div className='md:w-1/2 '>
                    <img className='w-full md:w-[68rem] md:h-[27rem] rounded-2xl  md:rounded-3xl' src={props.img} alt="envelope" />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center md:justify-between md:items-start '>
                    <div className=' flex flex-col '>
                        <h1 className='text-2xl md:text-4xl font-[Syne] font-semibold'>{props.title}</h1>
                        <h3 className='pt-6 font-[Poppins] font-extralight'>{props.paragraph}</h3>

                        <div className={`py-6 md:py-4 flex flex-row gap-6 justify-start  items-center  ` }>
                            <button className='px-6 py-1 border rounded-full cursor-pointer hover:bg-white hover:text-black hover:border-white transition duration-300 font-[Syne] font-semibold text-sm active:bg-transparent active:text-white'>{props.button1}</button>
                            <button className='px-6 py-1 border rounded-full text-center cursor-pointer hover:bg-white hover:text-black hover:border-white transition duration-300 font-[Syne] font-semibold text-sm active:bg-transparent active:text-white'>{props.button2}</button>
                        </div>
                    </div>
                    <button className='px-8 py-3 md:py-4 border border-white bg-white text-black rounded-full  cursor-pointer hover:bg-transparent hover:text-white transition duration-300 hover:border hover:border-white font-[Syne] font-semibold active:bg-white active:text-black'>View Case Study</button>
                </div>
            </div>
        </>
    )
}

export default Card