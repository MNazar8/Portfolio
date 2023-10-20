import React from 'react'
import { Link } from 'react-scroll/modules'
import logo from '../assets/images/logo.png'
import { useState } from 'react'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false)
    const navItems = [
        {
            label: 'HOME',
            page: 'home',
        },
        {
            label: 'PROJECTS',
            page: 'projects',
        },
        {
            label: 'ABOUT',
            page: 'about',
        },
        {
            label: 'CONTACT',
            page: 'contact',
        },
    ]

    return (
        <header className="w-full fixed bg-white z-50 ">
            <div className=' flex flex-row justify-between items-center px-12 '>
                <div>
                    <Link
                        key='home'
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                    >
                        <img src={logo} alt="" className=' h-16 w-auto cursor-pointer' />
                    </Link>
                </div>
                <div className=' flex'>
                    {navItems.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={item.page}
                                className={`ml-8 font-Montserrat tracking-widest cursor-pointer relative group ${
                                    item.page === 'active' ? 'font-bold' : 'hover:font-bold'
                                  }`}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-63}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}
                            >{item.label}
                            <div className="absolute w-full h-0.5 bg-black bottom-0 left-0 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
};