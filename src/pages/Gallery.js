import React from 'react'

import CartIcon from '../components/icons/CartIcon'
import MenuIcon from '../components/icons/MenuIcon'
import GridIcon from '../components/icons/GridIcon'

export default function Gallery() {
  return (
    <>

     

      <div className="relative flex flex-col items-center mt-10 ml-64 mr-64 mb-10  px-10 py-10 gap-8 ">
      <div className='flex flex-row w-full gap-x-578 '>
                <div>
                    <p className=' font-sans ml-0 text-4xl  '>Gallery</p>
                </div>
                <div className='flex '>
                    <div className='z-10 w-32 h-16 gap-x-4 rounded-3xl text-white flex items-center justify-center  bg-gray-900'>
                    <GridIcon  className="w-6 h-6"/>
                      <p className='font-bold text-xl '>Grid</p>
                    </div>
                    <div className='w-32 h-16 gap-x-2 -ml-8 rounded-3xl flex items-center justify-center bg-gray-300'>
                        <MenuIcon  className="w-6 h-6"/>
                        <p className='font-bold text-xl'>List</p>
                    </div>
                     
                </div>
            </div>
        <div className='relative flex flex-row px-1 py-10 '>
            
            <div className="flex-col uppercase h-116 w-108 mt-12 space-y-32  ">
                <div className='font-sans pl-4 space-y-2'>  
                    <p className="f text-2xl text-gray-400">all</p>
                    <p className=" text-3xl translate-x-16 text-stone-900 scale-125 ">christmas 2020</p>
                    <p className=' text-2xl text-gray-400'>aw 20</p>
                    <p className='text-2xl text-gray-400'>living aw 20</p>
                    <p className=' text-2xl text-gray-400'>campains</p>
                </div>
                <div className="w-full space-y-4">
                    <p className='uppercase text-gray-800' >more?</p>
                    <p className='text-gray-400'>Follow us on Instagram</p>
                    <div>
                        <div className='flex text-white gap-x-2 w-102 h-43 justify-center items-center bg-gray-900 rounded-2xl'>
                            <CartIcon className="w-4 h-4"/>
                            <p className='text-sm'>follow</p>
                        </div>
                    </div>
                </div>
             
            </div>
            
            <div>
                <div className='flex flex-row'>
                <div className="relative w-96  h-64 bg-gray-600 rounded-3xl">
                    
                </div>
                <div className="relative w-64 ml-4  h-64 bg-gray-600 rounded-3xl">
                
                    
                </div>
                </div>
                <div className='flex flex-row mt-4'> 
                <div className="relative w-64  h-64 bg-gray-600 rounded-3xl">
                    
                    </div>
                    <div className="relative w-96 ml-4  h-64 bg-gray-600 rounded-3xl">
                    
                    
                    
                    </div>
                    </div>
            </div>
          

 
        </div>
     
      </div>
 



    </>
  )
}
