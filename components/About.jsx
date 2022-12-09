import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import climb from '../public/climb.jpeg'

const About = ({ aboutIsOpen, setAboutIsOpen }) => {

    return (
        <Transition.Root show={aboutIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setAboutIsOpen}>
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
                        <Dialog.Overlay className="absolute inset-0 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="-translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="-translate-x-0"
                            leaveTo="-translate-x-full"
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
                                    <div className="absolute top-0 right-1/4 pt-4 pr-14 flex sm:-mr-56 xs:-mr-32 xs:mt-3">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setAboutIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-3/4 sm:w-screen xs:w-screen flex flex-col py-6 bg-black bg-opacity-80 shadow-xl overflow-y-auto scrollbar-hide">
                                    <div className="px-4 sm:px-6">
                                        <Dialog.Title className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">About Me</Dialog.Title>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                        <div className="absolute inset-0 px-4 sm:px-6 text-gray-200 flex xs:flex-col">
                                            <div className="md:max-w-xs xl:max-w-sm sm:hidden">
                                                <Image src={climb} alt="pic" className='' priority={true} />
                                            </div>
                                            <div className="pl-5 xs:pb-10 ">
                                                <div className="mb-8">
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Why software engineering?</p>
                                                    <p className="pl-5 text-sm">Quickly after finishing my undergrad in Finance and Economics at CU Boulder I was searching for something that landed me in between technical creativity and the analytical aspects of business. After finishing a bootcamp I can confidently say that software engineering is exactly the role I was looking for and learning the skills to materialize any creative idea is what excites me most.</p>
                                                </div>
                                                <div className="mb-8">
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Goals</p>
                                                    <p className="pl-5 text-sm">After becoming versed in MERN, Python, and Java - I am striving to continue expanding my expertise in those stacks and reinforcing a comprehensive understanding of computer science/development topics in general. To do so I am taking extra courses through educative.io, working on personal projects, and completing Leetcode algorithms daily. I hope to eventually contribute to innovative technologies in a realm such as ML/AI/NLP, BMI&apos;s, blockchain, AR/VR, or global security.</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Besides coding</p>
                                                    <p className="pl-5 text-sm">Having been an athlete throughout my life (mostly rugby through college), I enjoy staying active and being outdoors when I&apos;m not coding: whether thats skiing, weightlifting, cycling, yoga, swimming, or something similar.  </p>
                                                </div>
                                            </div>
                                        </div>
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

export default About
