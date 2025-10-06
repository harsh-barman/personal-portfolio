import React from 'react'

export default function About() {
  return (
    <div className=' w-full min-h-screen bg-[#eac394]' >
        <div className=' flex md:pl-[5rem] pt-5'>
            <blockquote className='text-left text-[2rem] w-full md:w-[500px] border-l-4 border-[#D1533A] pl-[16px] font-bold text-[#D1533A]'
             style={{ fontFamily: '"Italiana", sans-serif' }}
             >
                 I was born and raised in Jabalpur and I'm currently residing in Madhya Pradesh.
            </blockquote>
        </div>
        <div className='pt-[14rem] text-[#D1533A] '
            style={{ fontFamily: '"Italiana", sans-serif' }}
        >
            <div className='flex flex-col md:pl-[10rem]'>
                <h2 className='text-[22px] mb-[5rem] font-black'>
                    WHAT I DO
                </h2>
                <div className='w-full md:w-[70%] flex flex-col'>
                    <p className='text-[38px] font-bold'>
                        I value storytelling while considering human-based design,
                        so I’m able to explore new ways brands can connect with
                        people. I'm constantly gathering inspiration and searching
                        for innovative ideas.
                    </p><br/>
                    <span className='text-[28px] w-full md:w-[86%]'>
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
            <div className='relative flex flex-col justify-end md:pr-[8rem]   
                     text-[#D1533A] text-right '
                style={{ fontFamily: '"Italiana", sans-serif' }}
            >
                <span className='text-[28px] font-bold md:pr-[27rem]'>
                    EXPERIENCE
                </span>
             <div className="w-full flex flex-col items-end pt-[3rem]">
                <span className="flex flex-row w-fit pb-[30px] border-b border-[#D1533A] gap-[16rem] text-left text-[20px] font-bold">
                    MERN Stack Developer<br />Cerope
                    <span className="text-[22px]">Sep2025 - Pres</span>
                </span>

                <span className="pt-[30px] flex flex-row w-fit pb-[30px] border-b border-[#D1533A] gap-[14rem] text-left text-[20px] font-bold">
                    React JS Intern<br />Talentrise Technokrate 
                    <span className="text-[22px]">Mar2025 - Jun2025</span>
                </span>
            </div>

            </div>
        </div>
    </div>
  )
}
