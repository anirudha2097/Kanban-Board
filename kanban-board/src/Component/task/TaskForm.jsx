import React, { useState, useEffect } from 'react'
import './TaskForm.scss'
import { CgClose } from "react-icons/cg";


const initialColumnData = {
  todo: {
    tasks: []
  },
  inProgress: {
    tasks: []
  },
  peerReview: {
    tasks: []
  },
  done: {
    tasks: []
  }
};



const TaskForm = ({onClose}) => {
  
  const [columnsData, setColumnsData] = useState(initialColumnData);

  useEffect(() => {
      const savedColumns = localStorage.getItem('kanbanBoard');
      if (savedColumns) {
        try {
          setColumnsData(JSON.parse(savedColumns));
        } catch (error) {
          setColumnsData(initialColumnData);
        }
      } 
    }, []);
  
  useEffect(() => {
      localStorage.setItem('kanbanBoard', JSON.stringify(columnsData));
    }, [columnsData]);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();

     setColumnsData({
      ...columnsData,
      todo: {
        ...columnsData.todo,
        tasks: [...columnsData.todo.tasks, { title, description }]
      }
    });

    setTitle("");
    setDescription("");
   
  }

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
