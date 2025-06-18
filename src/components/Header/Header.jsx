import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showBorder, setShowBorder] = useState(false)

    const itemList = [
        { path: "/", element: "Home" },
        { path: "/about", element: "About" },
        { path: "/projects", element: "Projects" },
        { path: "/contact", element: "Contact" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setShowBorder(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full bg-black text-white md:px-14 px-8 py-5  overflow-x-hidden z-20 transition-all duration-300 ${showBorder ? 'border-b border-[#313131]' : 'border-b border-black'
            }`}>

            {/* Desktop Layout */}
            <div className="w-full hidden md:flex items-center justify-between relative">
                {/* Left - Logo */}
                <div className='flex-shrink-0 z-10'>
                    <img className='w-10' src={logo} alt="logo" />
                </div>

                {/* Center - Navigation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
                    <ul className='flex flex-row gap-1 justify-center items-center'>
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

                {/* Right - Hire Me */}
                <div className="flex-shrink-0 z-10">
                    <button className='px-5 py-2 rounded-full border border-white cursor-pointer active:text-black active:bg-white text-sm uppercase'>
                        Hire me
                    </button>
                </div>
            </div>


            {/* Mobile Layout */}
            <div className='w-full md:hidden'>
                <div className='flex justify-between items-center w-full'>
                    <div>
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

                {isMenuOpen && (
                    <div className="pt-8 min-h-screen">
                        <ul className='flex flex-col gap-4 justify-start items-start text-sm'>
                            {
                                itemList.map((item) => (
                                    <li onClick={() => setIsMenuOpen(false)} key={item.element} className='border-2 border-[#2f2f2f] w-full rounded-full'>
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
                        <button className='mt-8 px-8 py-2 rounded-full border border-white cursor-pointer active:text-black active:bg-white text-sm uppercase'>
                            Hire me
                        </button>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Header
