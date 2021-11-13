import React from 'react';
import './Sidebar.css' 
import { NavLink } from 'react-router-dom';
import { sidebarData } from './sidebarData';


function Sidebar() {
  const sidebarLinks = sidebarData.map((item, key) => {
    return (
      <NavLink to={item.link} className="sidebar-navlink">
        <li key={key} className="row">
          <div id="icon">{item.icon}</div>
          <div id="title">{item.title}</div>
        </li>
      </NavLink>
    )
  })


  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {sidebarLinks}
      </ul>
    </div>
  )
}

export default Sidebar
