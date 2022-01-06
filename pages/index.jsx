import Head from 'next/head'
import React, { useState } from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Image from 'next/image'
import flatiron from '../public/flatirons.png'
export default function Home() {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [resumeIsOpen, setResumeIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Soren Heitmann</title>
        <meta name="description" content="Software engineer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-flatirons bg-cover bg-blend-hue min-h-screen">
        {/* <Image src={flatiron} priority={true} al='background' className='absolute' /> */}
        <div className="w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center text-white absolute">
          <div className={resumeIsOpen || projectsIsOpen || aboutIsOpen ? "opacity-0 transition-all ease-linear" : "transition-all ease-linear"}>
            <Hero aboutIsOpen={aboutIsOpen} projectsIsOpen={projectsIsOpen} resumeIsOpen={resumeIsOpen} setAboutIsOpen={setAboutIsOpen} setProjectsIsOpen={setProjectsIsOpen} setResumeIsOpen={setResumeIsOpen} />
            <Navbar setAboutIsOpen={setAboutIsOpen} setProjectsIsOpen={setProjectsIsOpen} setResumeIsOpen={setResumeIsOpen} />
          </div>
          <div className='flex'>
            <About aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
            <Projects projectsIsOpen={projectsIsOpen} setProjectsIsOpen={setProjectsIsOpen} />
            <Resume resumeIsOpen={resumeIsOpen} setResumeIsOpen={setResumeIsOpen} />
          </div>
        </div>
      </div>
    </>
  )
}
