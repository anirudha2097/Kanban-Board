import React, { useState, useEffect } from 'react'
import './TaskDetails.scss'
import { CgClose } from "react-icons/cg";

const TaskDetails = ({onClose}) => {

  const initialArr = localStorage.getItem("kanban")?JSON.parse(localStorage.getItem("kanban")):[];
  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    setTasks([...tasks, {title, description}]);
    setTitle("");
    setDescription("");
  }

  useEffect(()=>{
    localStorage.setItem("kanban", JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className='task'>
        <div>
            <button onClick={onClose}><CgClose/></button>
            <div className='form'>
                <h1>Create Task</h1>
                <form onSubmit={addTask}>
                    {/* <label htmlFor="">Title</label> */}
                    <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>

                    {/* <label htmlFor="">Description</label> */}
                    <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default TaskDetails
