import React from 'react';
import "./Sidebar.css";
import Background4LinkedInCloneHorizontal from './../assets/Background4LinkedInCloneHorizontal.png'
import {Avatar}  from "@material-ui/core"

function Sidebar () {
    // recentItem est une function qui prend topic comme variable et render une div
    // const recentItem = (topix) => (div)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
    )
            
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={Background4LinkedInCloneHorizontal} alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>SaiYann</h2>
                <h4>saiyann@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent Skills:</p>
                {recentItem("ReactJs")}
                {recentItem("NodeJs")}
                {recentItem("NextJs")}
                {recentItem("Redux")}
                {recentItem("Web Socket")}
            </div>
        </div>
    );
}
export default Sidebar