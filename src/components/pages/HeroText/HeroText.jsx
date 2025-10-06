import React from 'react';
import LearnMore from '../../styles/buttons/LearnMore/LearnMore';
import ScrollStack from '../../styles/ScrollStack/ScrollStack';


export default function HeroText() {
  return (
    <div className={`relative w-full flex flex-col items-center bg-white md:pt-[20rem] pt-[10rem] `}>
      <div className=" text-left md:pl-25">
        <div className="w-full md:w-[70%] px-4">
          <p className=" text-[clamp(14px,5vw,38px)] text-black font-bold md:tracking-wide tracking-widest"
          style={{ fontFamily: '"Italiana", sans-serif' }}
          >
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
      <div className="mt-[10rem] w-full md:ml-auto md:max-w-[60%] mb-8 font-bold  md:tracking-wide tracking-widest px-2"
          style={{ fontFamily: '"Italiana", sans-serif' }}>
        <div className=" flex justify-end">
          <span className=" md:text-[2rem] text-[1.5rem] text-black md:mr-[36rem] mx-auto">
            EXPERTISES
          </span>
        </div>
        <div className="mt-10 flex md:justify-end justify-center md:gap-[8rem] gap- md:mr-[13rem]  ">

          <div className="flex flex-col  text-[clamp(1rem,5vw,1.6rem)] text-black gap-9  font-bold ">
            <div >-  Frontend Developer</div>
            <div >-  Web Design</div>
            <div >-  React</div>
            <div >-  Next.js</div>
          </div>
          <div className="flex flex-col gap-1rem text-[clamp(1rem,5vw,1.6rem)] text-black gap-9 font-bold">
            <div>-  UI / UX Design</div>
            <div >-  Concepting</div>
            <div >-  Tailwind CSS</div>
          </div>
        </div>
      </div>
      <div >
        <ScrollStack/>
      </div>
            
    </div>
  );
}
