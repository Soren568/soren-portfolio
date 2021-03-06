import React, { useEffect, useState } from 'react'

const Hero = ({ aboutIsOpen, projectsIsOpen, resumeIsOpen, setAboutIsOpen, setProjectsIsOpen, setResumeIsOpen }) => {
    const [anyOpen, setAnyOpen] = useState(false)

    return (
        <div className="border-t border-b border-gray-100 h-60 flex flex-col items-center justify-center mx-auto sm:mx-10 xs:mx-20">
            <h1 className="uppercase font-semibold text-4xl mb-4">Soren Heitmann</h1>
            <p className="lowercase font-extralight text-sm tracking-wider">full stack software engineer eager to contribute to a group that wants to change the world</p>
        </div>
    )
}

export default Hero
