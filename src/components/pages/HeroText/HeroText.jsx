import React from 'react';
import LearnMore from '../../styles/buttons/LearnMore/LearnMore';
import ScrollStack from '../../styles/ScrollStack/ScrollStack';


export default function HeroText() {
  return (
    <div className={`relative w-full flex flex-col items-center   `}>
      <div className=" text-left md:pl-25">
        <div className="w-full md:w-[70%]">
          <p className=" md:text-[2.4rem] text-[#eac394] font-bold"
          style={{ fontFamily: '"Italiana", sans-serif' }}>
            Hi, I'm HARSH BARMAN
            <br />
            I'm a front-end developer and designer passionate about creating
            engaging and intuitive web experiences. I thrive at the
            intersection of design, code, and interaction. <br />
            <br />
            always exploring new ways to stay on the cutting edge and deliver
            solutions that are both functional and visually compelling.
          </p>
        </div>
        <div className=' mt-10' >
          <LearnMore />
        </div>
      </div>
      <div className="mt-10 w-full ml-auto max-w-[60%] mb-8 font-bold "
      style={{ fontFamily: '"Italiana", sans-serif' }}>
        <div className=" flex justify-end">
          <span className=" text-[2rem] text-[#eac394] md:mr-[36rem]">
            EXPERTISES
          </span>
        </div>
        <div className="mt-10 flex justify-end gap-[8rem] md:mr-[12rem] ">
          <div className="flex flex-col gap-[1rem]">
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>
              -  Frontend Developer</div>
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>-  Web Design</div>
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>-  React</div>
          </div>
          <div className="flex flex-col gap-1rem">
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>-  UI / UX Design</div>
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>-  Concepting</div>
            <div className='text-[#eac394] text-[1.6rem] py-2 px-0 font-medium'>-  Tailwind CSS</div>
          </div>
        </div>
      </div>
      <div >
        <ScrollStack/>
      </div>
      <div className=" text-left md:pl-25">
        <div className="w-full md:w-[70%]">
          <p className=" text-[2.4rem] text-[#b7aaaa]">
            Hi, I'm HARSH BARMAN
            <br />
            I'm a front-end developer and designer passionate about creating
            engaging and intuitive web experiences. I thrive at the
            intersection of design, code, and interaction. <br />
            <br />
            always exploring new ways to stay on the cutting edge and deliver
            solutions that are both functional and visually compelling.
          </p>
        </div>
        <div className=' mt-10' >
          <LearnMore />
        </div>
      </div>
      
     
      
    </div>
  );
}
