import React, {useState} from 'react';
import Education from '../components/ResumeItem/Education'

function Resume() {
  
  const [menu, setMenu] = useState(false)
  const menuList = ['Education', 'History', 'Project']
  const [item, setItem] = useState(false)
  function itemActive() {
    setItem(true)
  }

  return (
    <div>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">Resume</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          My formal Bio Details 
        </span>

      </div >


      <div className="flex my-20 ml-44 relative">
        <div className="w-250 h-146 shadow-2xl shadow-slate-800 flex items-center pl-0">
          <div className=" w-1/3 ml-0 h-full bg-green-700 items-center justify-center text-justify ">
         
              <ul className='mt-6 pl-6 space-y-2 font-light'>
                <li onClick={setItem} className='bg-slate-600'>Education</li>
                <li>Work History</li>
                <li>Programming Skills</li>
                <li>Projects</li>
                <li>Interests</li>
                
              </ul>
           
          </div>

          <div className=" w-2/3 ml-0 h-full bg-gray-300 flex flex-col space-y-12  flex-shrink-0 self-center ">
            
            <Education  />
            
          </div>


        </div>
      </div>
    </div>
  );
}

export default Resume;