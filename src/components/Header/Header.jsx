import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const itemList = [
        {
            path: "/",
            element: "Home"
        },
        {
            path: "/about",
            element: "About"
        },
        {
            path: "/projects",
            element: "Projects"
        },
        {
            path: "/contact",
            element: "Contact"
        },

    ]

    return (
        <nav className='relative bg-black flex items-center justify-between text-white md:px-14 px-8 py-6 md:py-8 overflow-x-hidden'>
            <div className='hidden md:flex'>
                <img className='w-10 z-10' src={logo} alt="logo" />
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex ">
                <ul className='flex flex-row gap-1 justify-center items-center '>
                    {
                        itemList.map((item) => (
                            <li key={item.element}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center justify-center px-6 py-1 rounded-full hover:transition hover:duration-500 border border-black active:bg-white ${isActive
                                            ? 'bg-white text-black'
                                            : 'text-white hover:border hover:border-white'
                                        }`
                                    }
                                >
                                    {item.element}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <button className='hidden md:flex px-5 py-2 rounded-full border border-white cursor-pointer active:text-black  active:bg-white text-sm uppercase'>Hire me</button>

            <div className='w-full md:hidden'>
                <div className='md:hidden flex justify-between items-center w-full'>
                    <div >
                        <img className='w-8 z-10' src={logo} alt="logo" />
                    </div>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
                        {isMenuOpen ? (
                            <i className="text-2xl ri-close-large-line"></i>
                        ) : (
                            <i className="text-2xl ri-menu-line"></i>
                        )}
                    </div>

                </div>
                {
                    isMenuOpen ? <div className="md:hidden pt-8 min-h-screen">
                    <ul className='flex flex-col gap-4 justify-start items-start text-sm'>
                        {
                            itemList.map((item) => (
                                <li onClick={()=> setIsMenuOpen(false)} key={item.element} className='border-2 border-[#2f2f2f] w-full rounded-full'>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center justify-center px-5 py-1.5 rounded-full hover:transition hover:duration-500 border border-black active:bg-white ${isActive
                                                ? 'bg-white text-black'
                                                : 'text-white hover:border hover:border-white'
                                            }`
                                        }
                                    >
                                        {item.element}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='md:hidden mt-8 px-8 py-2 rounded-full border border-white cursor-pointer active:text-black  active:bg-white text-sm uppercase'>Hire me</button>
                </div> : ''
                }
                
            </div>

        </nav>
    )
}

export default Header