import React from 'react'
import Logo from '../commun/Logo'
import CartIcon from '../icons/CartIcon'
import HeartIcon from '../icons/HeartIcon'
import MenuIcon from '../icons/MenuIcon'
import SearchIcon from '../icons/SearchIcon'
import UserIcon from '../icons/UserIcon'

export default function TopBar() {
    return (
        <nav className="flex mx-auto px-4 py-16 h-16 bg-slate-900 w-full items-center container justify-between">
          <div className="flex items-center space-x-2">
           <p className='text-3xl text-white bold'>KubertosDev</p>
          </div>
          <div className='text-white'>
           <ul className='flex gap-6'>
             <li>AboutMe</li>
             <li>Resume</li>
             <li>Testimonial</li>
             <li>ContactMe</li>
           </ul>
          </div>
          
        </nav>
     
    )
}
