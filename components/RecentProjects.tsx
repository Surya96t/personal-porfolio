"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'


const RecentProjects = () => {
  return (
    <div className='py-10' id='projects'>


        {/* Heading */}
        <h1 className='heading'>
            Some of my {' '}
            <span className='text-purple'>featured projects</span>
        </h1>

        {/* Projects */}
        <div className='flex flex-wrap items-center justify-center p-4 gap-16'>
            {projects.map((item) => (
                <div key={item.id} className='sm:h-[41rem] h-[32rem] lg:min-h-[50rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer
                        title="/ui.aceternity.com"
                        href="https://twitter.com/mannupaaji">
                        
                        {/* Image */}
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img
                                src={item.img}
                                alt="cover"
                                className="z-10 absolute bottom-0"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {item.title}
                        </h1>

                        {/* Description */}
                        <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{color: "#BEC1DD", margin: "1vh 0"}}
                        >
                            {item.des}
                        </p>
                
                        {/* Icons List */}
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className='flex items-center'>
                                {item.iconLists.map((icon, index) => (
                                    <div 
                                    key={index} 
                                    className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                    }}>
                                        <img src={icon} alt='icon5' className='p-2' />
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    View Project
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects