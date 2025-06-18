import React from 'react'

const ExperienceCard = (props) => {
    return (
        <>
            <div className='flex flex-row md:justify-between items-center pt-8 border-b-2 border-b-[#727272] pb-2'>
                <div className='w-1/2'>
                    <h2 className=' md:text-2xl'>{props.title}</h2>
                </div>
                <div className='flex flex-col text-end  w-1/2 '>
                    <h3 className=' md:text-xl'>{props.name}</h3>
                    <h4 className='text-sm md:text-md font-light'>{props.date} </h4>
                </div>
            </div>
        </>
    )
}


export default ExperienceCard