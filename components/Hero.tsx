import React from 'react'
import { SparklesPreview } from './SparklesPreview'
import MagicButton from './MagicButton'
import { Spotlight } from './ui/SpotlightNew'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
    return (
        <div id="home" className='pb-20 pt-36'>
            {/* Background Grid */}
            <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
            absolute top-0 left-0 flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="relative w-full h-full">
                <Spotlight />
                <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        {/* Spark Preview */}
                        <SparklesPreview />

                        {/* Magic Buttons */}
                        <div className='mt-16 flex flex-col md:flex-row gap-16 w-full justify-center'>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-48" title="LinkedIn">
                                <MagicButton
                                    title="Visit my LinkedIn"
                                    icon={<FaLinkedin />}
                                    position="left"
                                />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-48" title="GitHub">
                                <MagicButton
                                    title="Visit my Github"
                                    icon={<FaGithub />}
                                    position="left"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero