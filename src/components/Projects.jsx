import React from 'react';
import aroundTheWorld from '../assets/images/aroundTheWorld.png'
import humanConet from '../assets/images/HumanConet.png'

function Projects() {

    const myProjects = [
        {
            name: 'Around the world',
            description: 'A beautiful website that allows to discover new experiences and places to visit around the world.',
            image: aroundTheWorld,
            gitHub: 'https://github.com/MNazar8/Around-the-world',
            link: 'https://around-theworld.vercel.app/',
            toolsUsed: ['React', 'Redux', 'TailwindCSS', 'Node.Js', 'Express', 'PostgreSQL']
        },
        {
            name: 'Human Conet',
            description: 'Web for a non-profit organization that protects territorial defenders in the fight against climate change.',
            image: humanConet,
            gitHub: 'https://github.com/kymi03/PF-HUMAN-CONECT',
            link: 'https://pf-human-conect.vercel.app/',
            toolsUsed: ['React', 'Redux', 'TailwindCSS', 'Express', 'Firebase Auth', 'MongoDB']
        }
    ]

    return (
        <section id='projects' className=' bg-black min-h-screen text-white flex flex-col'>
            <div className="">
                <div className=' flex flex-col justify-center h-full text-center p-6'>
                    <div className=' bg-transparent font-Montserrat text-3xl mt-4 underline underline-offset-8'>PROJECTS</div>
                </div>
            </div>
            <div>
                <div className=' flex flex-col items-center'>
                    {myProjects.map((project, index) => {
                        return (
                            <div key={index} className=' flex flex-row px-20 my-10'>
                                <div className=' md:w-1/2 group'>
                                    <a href={project.link} target='_blank' className='flex justify-center items-center'>
                                        <p className=' absolute opacity-0 group-hover:opacity-100 group-hover:text-white font-Montserrat underline underline-offset-8 text-xl tracking-wider'>Visit the site</p>
                                        <img src={project.image} alt="" className=' group-hover:opacity-20 transition-opacity duration-300' />
                                    </a>
                                </div>
                                <div className=' md:w-1/2 flex flex-col px-12 mt-2 mb-28'>
                                    <h4 className=' mb-2 text-xl font-Montserrat font-bold'>
                                        {project.name}
                                    </h4>
                                    <p className=' w-3/4 font-Montserrat'>{project.description}</p>
                                    <ul className="list-disc pl-4 grid grid-cols-2 mt-4 font-Montserrat">
                                        {project.toolsUsed.map((tool, toolIndex) => {
                                            return (
                                                <li key={toolIndex} className=' text-white'>
                                                    {tool}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <a href={project.gitHub} target='_blank' className=' w-fit bg-white rounded-md tracking-wider text-black font-Montserrat px-2 py-1 mt-4 font-bold'>GitHub Repository</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects