import React from 'react'

export default function About() {
  return (
    <div className=' w-full min-h-screen bg-[#fff] p-4' >
        <div className=' flex md:pl-[5rem] pt-50'>
            <blockquote className='text-left text-[clamp(14px,5vw,36px)] w-full md:w-[500px] border-l-4 border-[#455CE9] pl-[16px] font-bold text-[#000] md:tracking-wide tracking-widest '
             style={{ fontFamily: '"Italiana", sans-serif' }}
             >
                 I was born and raised in Jabalpur and I'm currently residing in Madhya Pradesh.
            </blockquote>
        </div>
        <div className='pt-[14rem] text-[#000] '
            style={{ fontFamily: '"Italiana", sans-serif' }}
        >
            <div className='flex flex-col md:pl-[10rem]'>
                <h2 className='text-[22px] mb-[5rem] font-black'>
                    WHAT I DO
                </h2>
                <div className='w-full md:w-[70%] flex flex-col md:tracking-wide tracking-widest'>
                    <p className='text-[clamp(14px,5vw,38px)] font-bold'>
                        I value storytelling while considering human-based design,
                        so I’m able to explore new ways brands can connect with
                        people. I'm constantly gathering inspiration and searching
                        for innovative ideas.
                    </p><br/>
                    <span className='text-[clamp(14px,5vw,30px)] w-full md:w-[86%] '>
                        I’m curious, and passionate, and strive for continuous evolution.
                        I’ve made creativity my lifestyle. Ever since I was a kid, art
                        has been what makes me tick. To this day, art is what moves me
                        to explore and play around with new shapes and techniques to
                        find solutions that are appealing and efficient.
                    </span>
                </div>
            </div>
        </div>
        <div className='w-full pt-[16rem] pb-[30rem]'>
            <div className='relative flex flex-col md:justify-end md:pr-[8rem]   
                     text-[#000]  '
                style={{ fontFamily: '"Italiana", sans-serif' }}
            >
                <span className='text-[28px] font-bold md:pr-[28rem] md:ml-auto mx-auto md:mx-0'>
                    EXPERIENCE
                </span>
             <div className="w-full flex flex-col items-end pt-[3rem]">
                <span className="flex flex-row w-fit pb-[30px] border-b border-gray-700 md:gap-[17rem] gap-[4.6rem] text-left text-[20px] font-bold tracking-wide">
                    MERN Stack Developer<br />Cerope
                    <span className="md:text-[22px] text-[18px]">Sep2025 - Pres</span>
                </span>

                <span className="pt-[30px] flex flex-row w-fit pb-[30px] border-b  border-gray-700 md:gap-[14rem] gap-[2.4rem] text-left text-[20px] font-bold  tracking-wide ">
                    React JS Intern<br />Talentrise Technokrate 
                    <span className="md:text-[22px] text-[18px]">Mar2025 - Jun2025</span>
                </span>
            </div>

            </div>
        </div>
    </div>
  )
}
