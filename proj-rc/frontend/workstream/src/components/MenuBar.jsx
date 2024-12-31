import React from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
import anonimoImagem from "../img/default_user.svg"
import "../styles/MenuBar.css";
// O que tem CHANGE tem q ser alterado dps

function MenuBar ({username, groups, level, progress}) {
    const [bar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!bar)

    const [selectedGroup, setSelectedGroup] = useState(null); // State to keep track of the selected group

    const handleGroupClick = (group) => {
        setSelectedGroup(group); 
      };


    return (
    <div className="sidebar">
        <div className="sidebarButton">
            <Menu size={36} strokeWidth={2.5} onClick={showSidebar}/>
        </div>
        <div className={bar ? "exitArea active" : "exitArea"} onClick={showSidebar}></div>
        <div className={bar ? "menu active" : "menu"}>
            <div className="closeContainer">
                <div className="xButton">
                    <X size={36} strokeWidth={2} onClick={showSidebar}/>
                </div>
            </div>
            <div className="profileContainer">
                <img src={anonimoImagem} alt="" className="profilePicture"/>     {/* CHANGE */} 
                <div className="profileContents">
                    <p className="username">{username}</p>             {/* CHANGE */}
                    <p className="level">Level: {level}</p> 
                    <div className="progress-bar">
                        <div className="progress-bar-fill"style={{width: `${progress}%`}}></div>
                    </div>
                </div>
            </div>
            <div className="division"></div>
            <div className="groupsContainer">
                <ul className="groupList">
                    {groups.length > 0 ? (
                    groups.map((group, index) => (
                        <li
                        key={index}
                        className={`groupItem ${selectedGroup === group ? 'selected' : ''}`}
                        onClick={() => handleGroupClick(group)}
                        >
                        {group}
                        </li>
                    ))
                    ) : (
                    <p>No groups available</p>
                    )}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default MenuBar;