import { Icon } from '@iconify/react'
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image'
import React, { useState } from 'react'


function Project({ project }) {
    const [hover, setHover] = useState(false);
    return (
        <div className="min-w-full mb-10" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="shadow-md">
                <div className="w-full h-6 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-4">
                    <span className="w-2 h-2 rounded-2xl bg-red-400  "></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400 "></span>
                    <span className="w-2 h-2 rounded-full bg-green-400 "></span>
                </div>
                {project.videoPath != "" ? (
                    <div className="rounded-b-lg aspect-video">
                        {/* <ReactPlayer url={project.videoPath} className="aspect-video w-full" /> */}
                        <iframe className='w-full h-full' src={project.videoPath} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen playsinline ></iframe>
                    </div>
                ) : (
                    <div className="aspect-video  rounded-b-lg">
                        {hover ? <Image src={project.screenshot1} width={1000} height={520} /> : <Image src={project.screenshot2} width={1000} height={520} />}
                    </div>
                )}
            </div>
            <div className="flex justify-between xs:mt-3">
                <div className='flex space-x-2 items-center'>
                    <Icon icon={project.icon} className='text-lg text-gray-400' />
                    <p className="font-medium text-lg ">{project.title}</p>
                </div>
                <a href={project.ghLink} target="_blank" rel="noreferrer"> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /></a>
            </div>
            <div className='min-w-full'>


                {
                    hover ? (
                        <p className="text-sm min-w-full mt-1">{project.description}</p>
                    ) : (
                        <ul className='flex flex-wrap min-w-full mt-1 align-top items-start pb-14' >
                            {project.techs.map((text, i) =>
                                <li key={i} className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2 ">{text}</li>
                            )}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Project