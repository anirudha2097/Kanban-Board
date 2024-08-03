import React, { useState, useEffect } from 'react'
import './TaskForm.scss'
import { CgClose } from "react-icons/cg";

const TaskForm = ({onClose}) => {

  const initialArr = localStorage.getItem("toDoTasks")?JSON.parse(localStorage.getItem("toDoTasks")):[];
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
    localStorage.setItem("toDoTasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <div className='taskForm'>
        <div>
            <button onClick={onClose}><CgClose/></button>
            <div className='formContainer'>
                <h1>Create Task</h1>
                <form onSubmit={addTask}>
                    <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>

                    <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default TaskForm
