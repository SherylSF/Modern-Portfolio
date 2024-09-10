'use client'
import { projects } from '@/data'
import React from 'react'
// import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from './ui/MagicButton';
import dynamic from "next/dynamic";


const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);


const RecentProjects = () => {
  return (
    <div className= "py-20 mt-16" id="projects">
        <h1 className="heading">
            A small selection of {''}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({id, title, des, img, iconLists, link, gitlink}) => (
                <div key={id}>
                    <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <PinContainer title={title} href={link}> 
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <div className="relative w-full h-full overrflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img"/>
                                </div> 
                                <img 
                                src={img}
                                alt={title}
                                className="z-10 absolute bottom-0"
                                />
                            </div>

                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                          
                            <div className="flex justify-center my-5">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>

                                {/* <div className=" flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm">Check Demo Video</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div> */}
                            
                        </PinContainer>
                    </div>
                    <div className="-mt-7">
                    <a href={gitlink} className="text-white flex lg:text-xl md:text-xs text-sm justify-center">
                    <MagicButton
                    title="Github"
                    icon={<img src="/git.svg"/>}
                    position="right"
                    />
                    </a>
                    </div>
                </div>
            ))}     
        </div>
    </div>
  )
}

export default RecentProjects