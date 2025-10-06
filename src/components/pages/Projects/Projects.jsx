import { div } from "motion/react-client";
import React from "react";
import image1 from '../../../assets/project1.jpg'
import image2 from '../../../assets/project2.jpg'
import image3 from '../../../assets/project3.jpg'


export default function Projects() {
  return (
    <div>
        <div className="w-full  h-screen flex flex-col justify-center items-center">
            <h1 className="font-black    text-[clamp(2rem,10vw,5rem)]  text-[#eac394] pb-[2rem] "
                style={{
                fontFamily: '"Boldonse", system-ui',
                transform: 'scaleX(0.7) scaleY(2)'}}
            >
                RECENT PROJECTS
            </h1>
            <span className="text-2xl pt-[2rem] w-full md:max-w-xl text-center text-[#eac394] font-black"
            style={{ fontFamily: '"Italiana", sans-serif' }}>
                Check out some of the most recent projects I've had the
                    pleasure of working on.</span>

        </div>
        {/* grid section */}
        <div className=" w-full md:max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-12">
                
                <div className="col-span-12 md:col-span-7 ">
                    <div className="bg-blue-100   h-[450px] flex items-start rounded-2xl  overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img 
                            src={image1}
                            alt="icon" 
                            className="w-full h-full object-cover"
                        />
                        {/* <span className="text-2xl font-bold rounded-2xl">1</span>      */}
                    </div>
                    <span className="flex flex-col text-2xl font-black mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        BlackBird Clothing
                        <span className="flex text-lg  mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            A landing page BlackBird Clothing showing parallax effect
                        </span>
                    </span>
                </div>
                
                
                <div className="col-span-12 md:col-span-5 ">
                    <div className="bg-blue-100  rounded-2xl  h-[350px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                        <img 
                            src={image2}
                            alt="icon" 
                            className="w-full h-full object-cover"
                        />
                        {/* <span className="text-2xl font-bold">2</span> */}
                    </div>
                    <span className="flex flex-col text-2xl font-black mt-6 "
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Shoe Store
                        <span className="flex text-lg  mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            landing page show serch and filtering working
                        </span>
                    </span>
                </div>

                <div className="col-span-12 pt-[2rem]">
                    <div className="bg-blue-100  rounded-2xl  h-[600px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] ">
                        
                        {/* <span className="text-2xl font-bold">3</span> */}
                    </div>
                    <span className="flex flex-col text-2xl font-black mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Cerope
                        <span className="flex text-lg  mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            AI personalized fashion recommender
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div className="pt-[4rem] pb-[20rem] w-full md:max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-12">


                 <div className="col-span-12 md:col-span-5">
                    <div className="bg-blue-100  rrounded-2xl  h-[350px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                         <img 
                            src={image3}
                            alt="icon" 
                            className="w-full h-full object-cover"
                        />
                        {/* <span className="text-2xl font-bold">2</span> */}
                    </div>
                    <span className="flex flex-col text-2xl font-black mt-6 "
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Shoe Store
                        <span className="flex text-lg  mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            landing page show serch and filtering working
                        </span>
                    </span>
                </div>
                
                <div className="col-span-12 md:col-span-7 ">
                    <div className="bg-blue-100 p-6 rounded-2xl  h-[450px] flex items-start shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] ">
                        <span className="text-2xl font-bold">1</span>
                    </div>
                    <span className="flex flex-col text-2xl font-black mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        BlackBird Clothing
                        <span className="flex text-lg  mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            A landing page BlackBird Clothing showing parallax effect
                        </span>
                    </span>
                </div>

            </div>
        </div>
    </div>
  );
}