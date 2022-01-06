import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import projectsFolder from '../assets/projectsList.json'
import Project from './Project';

const Projects = ({ projectsIsOpen, setProjectsIsOpen }) => {

    return (
        <Transition.Root show={projectsIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setProjectsIsOpen}>
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
                        <Dialog.Overlay />
                    </Transition.Child>
                    <div className="fixed inset-y-0 top-20 left-0 pr-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
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
                                    <div className="absolute top-0 right-14 -mr-10 pt-4 pl-2 flex sm:pl-4 xs:mt-2">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setProjectsIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-screen flex flex-col p-6 bg-black bg-opacity-75 shadow-xl overflow-x-auto">
                                    <div className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">
                                        Projects
                                    </div>
                                    <div className="flex align-middle justify-evenly overflow-x-auto scrollbar-hide p-10 text-white flex-wrap h-full scroll-snap">
                                        {projectsFolder.projects.map((p, i) => {
                                            return (
                                                <div className='min-w-[200px] max-w-[500px] ' key={i} >
                                                    <Project project={p} />
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Projects
