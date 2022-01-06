import React from 'react'

const Navbar = ({ setAboutIsOpen, setProjectsIsOpen, setResumeIsOpen }) => {
    return (
        <div className="flex border border-gray-100 items-center justify-center w-64 mx-auto rounded-md font-light uppercase text-xs tracking-widest mt-5 select-none">
            <div onClick={e => setAboutIsOpen(prev => !prev)} className="p-3 w-24 text-center cursor-pointer border-r border-gray-100 hover:bg-white hover:bg-opacity-25 transition-all duration-200">About</div>
            <div onClick={e => setProjectsIsOpen(prev => !prev)} className="p-3 w-24 text-center cursor-pointer border-r border-gray-100 hover:bg-white hover:bg-opacity-25 transition-all duration-200">Projects</div>
            <div onClick={e => setResumeIsOpen(prev => !prev)} className="p-3 w-24 text-center cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-200">Resume</div>
        </div>
    )
}

export default Navbar
