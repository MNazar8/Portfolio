import React from 'react'
import profile from '../assets/images/profileph.jpeg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Home() {
    return (
        <div id='home' className=' flex flex-row bg-my-background min-h-screen'>
            <div className=' w-8/12'>
                <div className=' flex flex-col justify-center pl-24 h-full'>
                    <h1 className=' text-black font-Viberate text-text-huge'>Hello,</h1>
                    <p className=' text-black font-Viberate text-4xl font-medium'>I'm Makarena. A full stack developer, <br />and a creative mind.</p>
                    <div className=' flex flex-row'>
                    <a className=' max-w-fit' href="https://github.com/MNazar8">< BsGithub className=' mt-6 h-8 w-auto' /></a>
                    <a href="https://www.linkedin.com/in/makarena-nazar-32948b120/"><BsLinkedin className=' mt-6 h-8 w-auto ml-6'/></a>
                    </div>
                </div>
            </div>
            <div className='w-3/12 mb-4'>
                <img src={profile} className=' pt-20' alt="" />
            </div>
        </div>
    )
}

export default Home