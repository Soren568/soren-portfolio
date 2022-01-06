import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import resumeJson from '../assets/resume.json';

const Resume = ({ resumeIsOpen, setResumeIsOpen }) => {
    return (
        <Transition.Root show={resumeIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setResumeIsOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0  transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen sm:max-w-screen">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 pt-4 pr-14 flex -mr-10 sm:pl-4 xs:mt-2">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setResumeIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-3/4 sm:w-screen xs:w-screen flex flex-col py-6 ml-auto bg-black bg-opacity-75 shadow-xl overflow-y-auto">
                                    <div className="px-4 sm:px-6 items-center flex">
                                        <Dialog.Title className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">Resume</Dialog.Title>
                                        <a href="/SorenHeitmannResume.pdf" title="Download Resume" download> <Icon icon="ant-design:file-pdf-outlined" className="ml-4 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /> </a>
                                        <a href="https://github.com/Soren568" title="GitHub" target="_blank" rel="noreferrer"> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /> </a>
                                        <a href="https://www.linkedin.com/in/soren-heitmann/" title="LinkedIn" target="_blank" rel="noreferrer"> <Icon icon="brandico:linkedin" className="ml-1 text-2xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /> </a>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6 ">
                                        <div className="absolute inset-0 pb-6 px-4 sm:px-6 text-gray-200 overflow-y-auto scrollbar-hide">
                                            <div className="h-auto border-l-4 border-white ml-8 mr-3 flex flex-col items-start ">
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Technologies</h1>
                                                    {resumeJson.resume.technologies.map((t, i) => (
                                                        <div key={i} className="flex items-center xs:flex-col">
                                                            <h1 className="tracking-widest mr-3 pl-10 text-sm" >{t.topic}</h1>
                                                            <ul className="flex flex-wrap mt-2 xs:justify-center">
                                                                {t.techs.map((tech, j) =>
                                                                    <li key={j} className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">{tech}</li>
                                                                )}

                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Education</h1>
                                                    <div className="pl-10 ">
                                                        {resumeJson.resume.education.map((place, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <div><span className="font-semibold"> {place.place}</span> | <span className="font-light italic">{place.date}</span></div>
                                                                    <ul className="font-extralight text-sm list-disc pl-4 mb-3">
                                                                        {place.bullets.map((b, j) =>
                                                                            <li key={j}> {b} </li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Work</h1>
                                                    <div className="pl-10">
                                                        {resumeJson.resume.work.map((place, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <div><span className="font-semibold"> {place.place}</span> | <span className="font-light italic">{place.date}</span></div>
                                                                    <ul className="font-extralight text-sm list-disc pl-4 mb-3">
                                                                        {place.bullets.map((b, j) =>
                                                                            <li key={j}> {b} </li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Extra <span>classes</span></h1>
                                                    <div className="pl-10 text-sm">
                                                        {resumeJson.resume.extra.map((item, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <div><span className="font-medium"> {item.name}</span> | <span className="font-light italic">{item.language}</span> | <span className="font-light italic">{item.date}</span> </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog >
        </Transition.Root >
    )
}

export default Resume
