import React from 'react'

const BlogCard = (props) => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center'>
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                    <div>
                        <img className='w-full md:h-52 rounded-4xl' src={props.img} alt="img" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-light mb-2 md:mb-4'>{props.date}</h3>
                        <h2 className='text-2xl md:text-4xl font-semibold mb-2 md:mb-4'>{props.title}</h2>
                        <div className='flex flex-row gap-4'>
                            <button className='border border-white px-5 py-0.5 rounded-full active:bg-black active:text-white cursor-pointer hover:bg-white hover:text-black transition duration-300'>{props.button1}</button>
                            <button className='border border-white px-5 py-0.5 rounded-full active:bg-black active:text-white cursor-pointer hover:bg-white hover:text-black transition duration-300'>{props.button2}</button>
                        </div>
                    </div>
                </div>
                <div className='my-8 md:my-0'>
                    <button className='bg-white text-black px-6 py-3 md:py-4 rounded-full font-semibold text-sm cursor-pointer active:bg-transparent active:border active:text-white active:border-white'>Read</button>
                </div>
            </div>
        </>
    )
}

export default BlogCard