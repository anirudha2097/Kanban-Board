import React from 'react'
import "./Navbar.css"
import { FaPlus } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav>
      <div>
        <h1>Kanban Board</h1>
      </div>
      <div>
        <input type="text" placeholder="Search" />
       
        <button><FaPlus/> Create Task</button>
      </div>
    </nav>
  )
}

export default Navbar;