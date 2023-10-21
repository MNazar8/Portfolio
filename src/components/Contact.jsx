import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact' className=' bg-black h-auto text-white flex flex-row pl-24 pt-7 pb-7 pr-7 items-center'>
      <div className=' w-1/3 p-6'>
        <div className=' flex flex-col'>
          <div className=' bg-transparent font-Viberate text-7xl mt-4'>CON-<br />TACT</div>
          <div className=' font-Viberate ml-1'>@/2023</div>
        </div>
      </div>
      <div className=' w-2/3'>
        <p className=' font-Montserrat flex flex-col mt-4'>
          Thanks for stopping by! If you made it this far in this portfolio let me tell you that I'm thrilled to connect with you. Whether you're interested in working together, have questions about my experience, or just want to chat about technology, please feel free to get in touch. Let's build something amazing together. <br />I look forward to hearing from you soon!
        </p>
        <div className=' py-6'>
        <a href="./src/assets/CV-MakarenaNazar-EN.pdf" target='_blank' download="CV-MakarenaNazar-EN.pdf" className=' bg-white px-4 py-2 text-black font-Montserrat font-semibold'>Download my CV</a>
        </div>
        <div className=' flex'>
          <a href="mailto:nazarmakarena@gmail.com" className=' mr-2'><MdEmail className=' h-8 w-auto' /></a>
          <a className=' mr-2' href="https://github.com/MNazar8">< BsGithub className=' h-8 w-auto' /></a>
          <a className='' href="https://www.linkedin.com/in/makarena-nazar-32948b120/"><BsLinkedin className=' h-8 w-auto' /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
