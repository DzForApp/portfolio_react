import React from 'react';
import ButtonResume from '../components/commun/ButtonResume';
import ButtonHire from '../components/commun/ButtonHire';

function About() {
  return (
    <div>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">About Me</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          Why Choose Me ?
        </span>

      </div >


      <div className="flex my-20 ml-44 relative">
        <div className="w-250 h-146 shadow-2xl shadow-slate-800 flex items-center pl-0">
          <div className=" w-1/2 ml-0 h-full bg-green-700 flex-shrink-0 self-center "></div>

          <div className=" w-1/2 ml-0 h-full bg-gray-300 flex flex-col space-y-12  flex-shrink-0 self-center ">
            <span className=" text-sm font-sans text-slate-800 font-normal p-5">Full stack web and mobile developer with background knowledge of MERN stacks with redux,
              along with a knack of building applications with utmost efficiency.
              Strong professional with a BSC willing to be an asset for an organization.</span>
            <div className='p-5'>
              <span className=" text-xl font-medium text-slate-800">
                Here are a Few Highlights:
              </span>
              <ul className='mt-6 pl-6 space-y-2 font-light'>
                <li>Full Stack web and mobile development</li>
                <li>Interactive Front End as per the design</li>
                <li>React and React Native</li>
                <li>Redux for State Mnanagement</li>
                <li>Building REST API</li>
                <li>Managing database</li>
              </ul>
            </div>
            <div className='flex space-x-16 pl-16 '>
              <ButtonHire  className="h-12 w-32 bg-slate-900 text-white border-2 rounded-4xl" />
              <ButtonResume  className="h-12 w-32 bg-orange-600 rounded-4xl " />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default About;