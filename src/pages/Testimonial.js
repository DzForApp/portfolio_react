import React, {useState} from 'react';
import Education from '../components/ResumeItem/Education'

function Testimonial() {
  
  

  return (
    <div>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">Testimonial</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          What My Clients Say About Me
        </span>

      </div >


      <div className="flex my-20 ml-0 relative">
        <div className="w-full h-146 shadow-2xl shadow-gray-800  bg-gray-800 flex items-center pl-0">
         

          <div className=" w-2/3 ml-0 h-1/3 bg-gray-50 flex flex-col space-y-12  flex-shrink-0 place-self-end ">
         
          </div>


        </div>
      </div>
    </div>
  );
}

export default Testimonial;