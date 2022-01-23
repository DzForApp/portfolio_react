import React from 'react'
import Button from '../components/content/Button'
import ProDetail from '../components/content/ProductMoreDetail'
import ReviewPanel from '../components/content/ReviewPanel'
import StarIcon from '../components/icons/StarIcon'
import Product from '../components/content/Product'

export default function ProductDetail() {
  return (
    <>

      <h1 className="uppercase flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Return to all products
      </h1>

      <div className="relative flex flex-col items-center mt-10 ml-64 mr-64 mb-10  px-10 py-10 gap-8 ">
        
        <div className='relative flex flex-row px-1 py-10 '>
          <div className="relative w-101  h-145 bg-gray-500 rounded-3xl">
            <div className="absolute flex items-center justify-center w-16 h-16 -translate-y-8  bg-white rounded-full top-1/2 -left-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="absolute flex items-center justify-center w-16 h-16 -translate-y-8  bg-white rounded-full -right-4 top-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>

          <div className="flex-col h-116 w-108 mt-10 pl-10 pt-10 space-y-3 ">
            <div className='pl-4 space-y-2'> 
             <p className="uppercase bg-blue-300 w-32 text-center rounded-full">only & left</p>
              <p className="font-sans text-3xl translate-x-16 text-stone-900 scale-125 ">Rico Lounge Chair</p>
              <p className='font-sans text-2xl text-gray-400'>$1.625,00</p>
              <p>SKU: 1938302145</p>
            </div>
            <div className="w-full h-113 bg-gray-100 rounded-5xl">
              <div className="relative flex space-x-2 h-1/2 left-4 justify-center items-center ">
                <Button name="color" className="w-24 h-12 rounded-5xl bg-gray-300" />
                <Button name="material" className="bg-gray-300 rounded-5xl w-24 h-12" />
                <Button name="qty" className="bg-gray-300 rounded-5xl w-24 h-12" />

              </div>
              <div className='flex flex-row items-center justify-center'>
                <Button icon="" className="bg-gray-600 rounded-xl w-12 h-12" /> 
                <button className="flex justify-center items-center space-x-2 w-full ml-4 mr-4 bg-green-500 rounded-3xl py-4 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            <div className="relative flex-col">
              <div className=" flex items-center justify-center w-16 h-10 rounded-full  top-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className=" flex items-center justify-center w-16 h-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>


          <div>

          </div>
        </div>
        <div className="relative flex w-full mx-16 h-full bg-gray-300 rounded-3xl">
          <div className="relative flex flex-col gap-4  pl-10 pr-10 w-96 min-w-max h-full  bg-gray-500 rounded-3xl justify-center items-center">
            <div className='flex gap-32 mt-6'>
              <div className='font-semibold h-12 '>Review 16</div>
              <div className='flex'>
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />


              </div>
            </div>
            <ul>

              <li>
                <ReviewPanel name="ahmet duncan1" review="welcome to our review component  " />
              </li>
              <li>
                <ReviewPanel name="ahmet duncan2" review="welcomewe  lcomewelcomewelcome  " />
              </li>



            </ul>
            <div className='flex gap-2 pb-6'>
              <span className='rounded-full bg-blue-300 w-8 h-8 items-center justify-center text-center'>1</span>
              <span className='rounded-full bg-blue-200 w-8 h-8 items-center justify-center text-center'>2</span>
              <span className='rounded-full bg-blue-50 w-8 h-8 items-center justify-center text-center'>3</span>
            </div>


          </div>

          <div className='items-center justify-center pl-10 mt-10 w-full'>
            <div className='font-sans font-normal text-2xl text-gray-900  '>
              <h1>More Details</h1>
            </div>
            <div className='flex-col justify-center gap-6 '>
              <div className='flex'>
                <ProDetail title='dimension' text='Size: W:87 x H:79 x D:81.5 cn' text2='Seat height: 41 cm ' text3='Backrest height: 38 cm' />
                <ProDetail title='delevery & return ' text='Phasellus eleifend at felis si ' text2='t amet tincidunt. Ut ornare in' text3='arcu ut interdum.' />
              </div>
              <div className='flex'>
                <ProDetail title='care' text='Praesent ac fringilla nisi, at' text2='gravida nisl. Phasellus eleifend ' text3='at felis sit amet tincidunt. Ut ornare in arcu.' />
                <ProDetail title='instruction ' text='profissional dry clean only' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative  items-center  text-center w-auto ml-64 mr-64 h-32 text-gray-800'>
        <div className='font-sans text-5xl' >
          People also bought
        </div>
        <div className='flex flex-row space-x-8  py-16'>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>



    </>
  )
}