import React from 'react'

export default function Button(props) {
    return (
        < >
        <div>
             <div className='items-center text-center  pb-2 uppercase'>
                 {props.name} 
             </div >
             <button className={props.className}>

                    {props.icon}
         
                      
            </button>
            </div>
        </ >
    )
}
