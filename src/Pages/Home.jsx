import React from 'react';
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/syne/800.css";
import "@fontsource/inter";
import 'remixicon/fonts/remixicon.css'

import img from '../assets/img.png';
import img2 from '../assets/img2.png';
import doradesign from '../assets/doradesign.png'
import wavefun from '../assets/wavefun.png'
import Frame from '../assets/Frame.png'
import Star from '../assets/Star.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import Card from '../components/Card';
import ExperienceCard from '../components/ExperienceCard';
import BlogCard from '../components/BlogCard';
import TestimonialSlider from '../components/TestiMonialSlider';




const Home = () => {
  return (
    <div className='bg-black text-white scroll-smooth pb-16'>
      <div className="bg-black flex flex-col pt-16 md:pt-36 justify-center items-center  px-4">
        <h1 className="text-white text-center font-extrabold uppercase text-3xl md:text-6xl font-[Syne]">
          <span >
            I AM A
          </span>
          <img
            src={img2}
            alt="Profile"
            className="inline mb-5 w-12 h-6 md:w-24 md:h-12 rounded-xl mx-2 relative top-[6px]"
          />
          <span >
            FREELANCE
          </span>
          <br />
          <span >
            DESIGNER
          </span>
          <img
            src={img}
            alt="UI"
            className="inline mb-2 w-12 h-6 md:w-24 md:h-12 rounded-xl mx-2 align-middle"
          />
          <span >
            FROM
          </span>
          <br />
          <span >
            SAN FRANCISCO
          </span>
        </h1>

        <div className='flex flex-col md:flex-row justify-center items-center px-6 py-12 md:p-24 w-full '>
          <div className='md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-24 mb-12 '>
            <img className='h-6 md:h-8' src={doradesign} alt="doradesign" />
            <img className='h-6 md:h-8' src={wavefun} alt="wavefun" />
            <img className='h-5 md:h-6' src={Frame} alt="Frame" />
          </div>
          <div className='md:w-1/2 font-[Poppins] text-sm w-full text-gray-400'><p>
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
          </p></div>
        </div>
      </div>


      <div className='md:px-16 '>
        <div className='px-8 md:px-12 pt-12 flex flex-row items-center gap-2'>
          <img className='md:h-8  h-5' src={Star} alt="Star" />
          <h2 className='text-3xl md:text-4xl font-semibold'>Expertise</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 px-8 md:px-12 pt-8 gap-8 md:gap-16 pb-16 '>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-row gap-2 items-center'>
              <i className="text-[0.5rem] ri-square-fill"></i>
              <h2 className='text-2xl'>Branding</h2>
            </div>
            <h3 className='text-gray-400 font-[Poppins]'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <div className=' flex flex-row gap-2 items-center'>
              <i className="text-[0.5rem] ri-square-fill"></i>
              <h2 className='text-2xl'>UI Design</h2>
            </div>
            <h3 className='text-gray-400 font-[Poppins]'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</h3>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-row gap-2 items-center'>
              <i className="text-[0.5rem] ri-square-fill"></i>
              <h2 className='text-2xl'>UX Design</h2>
            </div>
            <h3 className='text-gray-400 font-[Poppins]'>I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements</h3>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-row gap-2 items-center'>
              <i className="text-[0.5rem] ri-square-fill"></i>
              <h2 className='text-2xl'>Development</h2>
            </div>
            <h3 className='text-gray-400 font-[Poppins]'>I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.</h3>
          </div>


        </div>
      </div>
      <div className='py-16 px-6 md:px-24 font-[Syne] font-extralight'>
        <div className='flex flex-row justify-between items-center '>
          <div className=' flex flex-row  items-center gap-2'>
            <img className='h-8' src={Star} alt="Star" />
            <h2 className='text-3xl md:text-4xl font-semibold '>Works</h2>
          </div>
          <h3 className='cursor-pointer underline-offset-3 underline'>view all</h3>
        </div>
        <div className='pt-12 flex flex-col gap-8'>
          <Card
            img={img3}
            title={"Analysis Application"}
            paragraph={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
            button1={"FIGMA"}
            button2={"UX"}
          />
          <Card
            img={img4}
            className={'lg:-translate-x-40'}
            title={"Fortknox Application"}
            paragraph={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
            button1={"MOBILE"}
            button2={"WEB"}
          />
          <Card
            img={img5}
            title={"Zenocide Application"}
            paragraph={"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence."}
            button1={"APP"}
            button2={"WEB"}
          />
        </div>

      </div>
      <div className='font-[Syne] font-semibold px-8 md:px-24 pt-8 py-24 '>
        <div className=' flex flex-row  items-center gap-2 mb-4'>
          <img className='h-6' src={Star} alt="Star" />
          <h2 className='text-3xl md:text-4xl  '>Experience</h2>
        </div>

        <ExperienceCard
          title={"Lead Product Designer"}
          name={"Fortknox"}
          date={"Mar 2022 - Oct 2023"}
        />
        <ExperienceCard
          title={"Intern Designer"}
          name={"OmniSafe"}
          date={"Mar 2022 - Oct 2023"}
        />
        <ExperienceCard
          title={"UI Designer"}
          name={"DoraDesign"}
          date={"Mar 2022 - Oct 2023"}
        />
        <ExperienceCard
          title={"Frontend Developer"}
          name={"OpacityAuthor"}
          date={"Mar 2022 - Oct 2023"}
        />
      </div>

      {/*  Blog Components  */}
      <div className='px-8 md:px-24 py-12'>
        <div className='flex flex-row justify-between items-center '>
          <div className=' flex flex-row  items-center gap-2'>
            <img className='h-8' src={Star} alt="Star" />
            <h2 className='text-3xl md:text-4xl font-semibold '>Blog</h2>
          </div>
          <h3 className='cursor-pointer underline-offset-3 underline'>view all</h3>
        </div>


        <div className='pt-16   flex flex-col gap-8'>
          <BlogCard
          img={img3}
          date={"Nov 9, 2023"}
          title={"How UX works in web"}
          button1={"UI"}
          button2={"UX"}
          />
          <BlogCard
          img={img4}
          date={"Aug 18, 2023"}
          title={"Case study - Analysis Application."}
          button1={"DESIGN"}
          button2={"PRINT"}
          />
          <BlogCard
          img={img5}
          date={"Feb 16, 2023"}
          title={"3 ways to develop your skill"}
          button1={"FIGMA"}
          button2={"WEB"}
          />
        </div>
      </div>

      {/* What they say */}
        <div className='px-8 md:px-24 md:py-16'>
          <div className=' flex flex-row  items-center gap-2'>
            <img className='h-8' src={Star} alt="Star" />
            <h2 className='text-3xl md:text-4xl font-semibold '>Blog</h2>
          </div>
          <div>
           <TestimonialSlider/>
          </div>
        </div>

        <div className='px-8 md:px-24 flex flex-col justify-center p  y-16'>
          <div className=' flex flex-row   gap-2 mb-6'>
            <img className='h-8' src={Star} alt="Star" />
            <h1 className='text-3xl md:text-4xl font-semibold '>Frequently asked questions</h1>
          </div>
          <h2 className='mb-6 text-2xl md:text-3xl'>What is your design process?</h2>
          <h3 className='font-[Poppins] text-[#CBCBCB]'>My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.</h3>
          <h2 className='text-2xl md:text-3xl mt-6'>What tools and software do you use for UX design?</h2>
          <h2 className='text-2xl md:text-3xl mt-6'>How do you measure the success of your UX designs?</h2>
        </div>
    </div>
  );
};

export default Home;
