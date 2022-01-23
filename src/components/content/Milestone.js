import React from 'react';

function Milestone(props) {
    return (
        <div>
            <div className="flex flex-col relative">
              <div className=" text-2xl text-gray-600 font-medium ro absolute -top-12 -left-3">2009</div>
              <div className=" w-7 h-7 bg-gray-50 rounded-lg absolute -top-4 rotate-45"></div>
              <div className="absolute top-10 -left-20">
                <div className=" w-96 h-40 bg-gray-50 rounded-5xl absolute z-10 p-5 flex gap-x-5 items-center">
                  <div className=" w-28 h-32 bg-gray-700 rounded-4xl shadow-2xl flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className=" text-xl text-blx-900 font-medium">Tue, 11 Oct</span>
                    <span className=" text-gray-500 font-medium">Donec sed enim consequat, hendrerit eros eget, sodales libero.</span>
                  </div>
                </div> 
                <div className=" w-14 h-14  rotate-45 rounded-lg absolute left-16 -top-1 opacity-40 bg-white"></div>
              </div>
            </div>
        </div>
    );
}

export default Milestone;