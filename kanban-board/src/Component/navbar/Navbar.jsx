import React from 'react'
import "./Navbar.scss"
import { FaPlus } from "react-icons/fa";

const Navbar = ({onCreateTaskClick}) => {

  return (
    <nav>
      <div>
        <h1>Kanban Board</h1>
      </div>
      <div>
        <input type="text" placeholder="Search" />
       
        <button onClick={onCreateTaskClick}><FaPlus/> Create Task</button>
      </div>
    </nav>
  )
}

export default Navbar;