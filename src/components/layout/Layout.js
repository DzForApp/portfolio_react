import React from 'react'
import { Outlet } from 'react-router'
import TopBar from './TopBar'


export default function Layout({children,className}) {
    return (
        <div path='' className={`min-h-screen ${className}`} >
            <TopBar/>
            <Outlet/>
        </div>
    )
}
