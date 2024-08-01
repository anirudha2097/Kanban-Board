import './App.scss';
import Navbar from './Component/navbar/Navbar';
import Home from './Component/home/Home';
import Task from './Component/task/TaskDetails';
import { useState } from 'react';

function App() {

  const [createTask, setCreateTask] = useState(false);

  return (
    <>
      <Navbar onCreateTaskClick = {()=> setCreateTask(true)} />
      <Home/>
      {createTask && <Task onClose={()=> setCreateTask(false)} />}
    </>
  );
}

export default App;
