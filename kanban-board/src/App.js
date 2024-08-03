import './App.scss';
import Navbar from './Component/navbar/Navbar';
import Home from './Component/home/Home';
import TaskForm from './Component/task/TaskForm';
import { useState } from 'react';

function App() {

  const [createTask, setCreateTask] = useState(false);

  return (
    <>
      <Navbar onCreateTaskClick = {()=> setCreateTask(true)} />
      <Home/>
      {createTask && <TaskForm onClose={()=> setCreateTask(false)} />}
    </>
  );
}

export default App;
