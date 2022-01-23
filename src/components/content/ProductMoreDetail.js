import React from 'react'

export default function ProDetail(props) {
    return (
        <div className='w-64 h-32 mr-10 mt-10 '>
            <h2 className='font-sans text-lg  font-bold uppercase text-primary-light'>{props.title}</h2>
            <p className='font-sans text-gray-600'>{props.text}</p>
            <p className=' font-sans text-gray-600'>{props.text2}</p>
            <p className=' font-sans text-gray-600'>{props.text3}</p>
        </div>
    )
}
