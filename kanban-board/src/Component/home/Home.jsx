import React, { useEffect, useState } from 'react'
import "./Home.scss";



// const taskArr = [{
    //     "title": "task 1",
    //     "description": "task 1 description"
    // }, 
// {
//     "title": "task 2",
//     "description": "task 2 description"
// }, 
// {
    //     "title": "task 3",
    //     "description": "task 3 description"
// }, 
// {
//     "title": "task 4",
//     "description": "task 4 description"
// }, 
// {
//     "title": "task 5",
//     "description": "task 5 description"
// },  
// ]

// const Column = ({arr=[]}) => (
//     <div>
//         {/* {arr.map((item, index) => (
//             // <Card key = {index} img={`${imgUrl}${item.poster_path}`} />
//             <TaskDetail key={index} title={item.title} description={item.description} />
//         ))} */}
//         {console.log(arr)}
//     </div>

// )


const Home = () => {

    const taskArr = localStorage.getItem("kanban")?JSON.parse(localStorage.getItem("kanban")):[];

    const [activeCard, setActiveCard] = useState(null);

    useEffect(()=>{
        localStorage.setItem("kanban", JSON.stringify(taskArr));
      }, [taskArr])
    
    //   onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}
    const TaskDetail = ({title, description, index, setActiveCard}) => (
        <div className='tasks' draggable onDragEnter ={() => setActiveCard(index)} onDragExit ={() => setActiveCard(null)}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )    

    // console.log(activeCard);

  return (
    <div className='home'>
        {/* <h1>{activeCard}</h1> */}
        <div className="toDo">
            <h4>To Do</h4>
            {taskArr.map((item, index) => (
                <TaskDetail key={index} title={item.title} description={item.description} index={index} setActiveCard={setActiveCard}/>
            ))}
            {/* <Column arr ={taskArr} /> */}
        </div>
        <div className="progress">
            <h4>In Progress</h4>
        </div>
        <div className="review">
            <h4>Peer Review</h4>
        </div>
        <div className="done">
            <h4>Done</h4>
        </div>
    </div>
  )
}

export default Home