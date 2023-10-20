import React from 'react'

function About() {
    return (
        <section id='about' className=' flex '>
            <div className=' h-screen bg-white flex flex-col justify-center items-start'>
                <h6 className=' text-8xl font-Viberate text-center transform -rotate-90 origin-center mx-auto'>
                        About.
                </h6>
            </div>
            <div className=' flex flex-col justify-center font-Montserrat w-8/12'>
                <p className=' mb-2'>I'm a <strong>Full Stack Developer</strong> and a former lawyer from Santiago del Estero, Argentina.
                    My legal background has gifted me with exceptional problem-solving skills, which I've seamlessly transplanted into the
                    ever-evolving world of technology.</p>
                    <p className=' mb-2'>I've developed a solid foundation in agile methodologies, GIT, data structures, algorithms,
                    and a diverse set of technologies, which includes <strong>JavaScript, React, Redux, TailwindCSS, Node, Express, PostgreSQL,
                    </strong> and <strong>MongoDB.</strong> I've also gained hands-on experience by building both single-page applications (SPAs) and web apps with these technologies.</p> 
                    <p className=' mb-2'>With an agile mindset, a results-oriented approach, and a knack for creative thinking, I thrive in collaborative environments.
                    I love working with great people, solving problems and to continuously learn something everyday.</p>
                    <p className=' mb-2'>Additionally, I'm proficient in English, with a C2 level.</p>
                    <p>I'm thrilled to be a part of exciting projects and ready to continue growing as a Full Stack Developer.
                    I can't wait to share my experience and enthusiasm with your team, making every journey in tech an amazing one!</p>
                
            </div>
        </section>
    )
}

export default About