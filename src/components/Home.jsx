import React from 'react'
import profile from '../assets/images/imgportfolio2.jpg'

function Home() {
    return (
        <div id='home' className=' flex flex-row bg-my-background min-h-screen'>
            <div className=' w-9/12'>
                <div className=' flex flex-col justify-center pl-24 h-full'>
                    <h1 className=' text-black font-Viberate text-text-huge'>Hello,</h1>
                    <p className=' text-black font-Viberate text-4xl font-medium'>I'm Makarena. A full stack developer, <br />and a creative mind.</p>
                </div>
            </div>
            <div className='w-3/12'>
                <img src={profile} className=' w-full pr-2 h-auto pt-20 rounded-md' alt="" />
            </div>
        </div>
    )
}

export default Home