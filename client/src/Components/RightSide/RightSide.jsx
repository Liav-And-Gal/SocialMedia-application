import React from 'react'
import './RightSide.css'
import { HiHome } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import TrendCard from '../TrendCard/TrendCard';



const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="NavIcons">
                <HiHome size={24} />
                <IoMdNotificationsOutline size={24} />
                <IoSettingsOutline size={24} />
                <FaRegCommentDots size={24} />
            </div>

            <TrendCard/>

            <button className="button r-button">
                Share
            </button>

        </div>
    )
}

export default RightSide