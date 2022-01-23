import React from 'react'

export default function Login() {
    return (

        <div className="flex items-center justify-center  bg-primary-dark w-full min-h-screen">


            <div className=" bg-gray-100  py-5 flex-grow max-w-lg rounded-5xl">
                <div className="flex justify-center py-7">
                    <span className="font-medium text-4xl">Welcome</span>
                </div>

                <div className="items-center flex flex-col justify-around px-16 space-y-4">
                    <input className="bg-gray-300 rounded-3xl w-full p-4 focus:outline-none" name="username" placeholder="username" />
                    <input className="bg-gray-300 rounded-3xl w-full p-4 focus:outline-none" type="password" placeholder="password" />
                    <div className="flex space-x-3 self-start text-gray-400 items-start">
                        <div className="bg-gray-300 rounded-xl w-8 h-8 self-start"></div>
                        <span>Remember me </span>
                    </div>

                    <button className="self-end bg-green-300 rounded-xl text-yellow-200 px-5 py-4 shadow-xl">Login</button>
                </div>
                <div className="bg-gray-300 w-full h-2 mt-7 mb-4"></div>

                <div className="flex justify-center space-x-2 items-center">
                    <span className="text-gray-400">Already have an account ?</span>
                    <span>Sign Up</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
