import React from 'react'
import { Outlet } from 'react-router-dom'
import ChatWidget from '../../components/ChatWidget'

const HomeOutlet = () => {
    return (
        <div>
            <Outlet />
            {/* <ChatWidget/> */}
        </div>
    )
}

export default HomeOutlet