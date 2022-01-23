import React from 'react'
import TopBar from '../components/layout/TopBar' 
import FaceIcon from '../components/icons/FaceIcon'
import About from '../pages/About'
import ButtonHire from '../components/commun/ButtonHire'
import ButtonResume from '../components/commun/ButtonResume'
import Resume from './Resume'


export default function Home() {
    return (
        <div className=''>


            <div className="relative flex-col items-center h-130 mt-0 bg-slate-900 flex justify-center space-x-16 ">
                <div className='w-full'>
                    <TopBar />
                </div>
                <div className='flex flex-row text-center'>
                    <div className='flex flex-col justify-center pb-8 items-center  h-full text-4xl  '>
                        <div className='relative w-full space-y-8 text-center justify-items-center'>
                            <div className='flex ml-32 space-x-2'>
                                <FaceIcon className='w-12 h-12' />
                                <FaceIcon className='w-12 h-12' />
                                <FaceIcon className='w-12 h-12' />
                                <FaceIcon className='w-12 h-12' />
                                <FaceIcon className='w-12 h-12' />
                            </div>
                            <div className='flex flex-row ml-32 space-x-4 w-96'>
                                <p className='text-white'>Hello, I'M </p>
                                <p className='text-orange-600' >Kubertos</p>
                            </div>
                            <div className='text-white'>
                                <p>  Full Stack Devloper</p>
                            </div>
                            <div className='text-white text-xl'>
                                <p>Knack of building applications with front and back end operations.</p>
                            </div>
                        </div>
                        <div className='flex space-x-16 mt-16 pb-32'>
                            <ButtonHire className="h-16 w-64 bg-slate-900 text-white border-2 rounded-4xl" />
                            <ButtonResume className="h-16 w-64 bg-orange-600 rounded-4xl " />
                        </div>
                    </div>
                    <div className='w-64 h-64 bg-gray-50 rounded-full'>
                        <img src="" alt="no image" />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col mt-12 px-4'>

                <About />

            </div>
            <div className='w-full flex flex-col mt-12 px-4'>

                <Resume />

            </div>

        </div>
    )

}
