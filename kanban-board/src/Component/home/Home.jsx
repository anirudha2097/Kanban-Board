import React from 'react'
import "./Home.scss";


// const initialArr = localStorage.getItem("kanban");

const taskArr = [{
    "title": "task 1",
    "description": "task 1 description"
}, 
{
    "title": "task 2",
    "description": "task 2 description"
}, 
{
    "title": "task 3",
    "description": "task 3 description"
}, 
{
    "title": "task 4",
    "description": "task 4 description"
}, 
{
    "title": "task 5",
    "description": "task 5 description"
},  
]

const TaskDetail = ({title, description}) => (
    <div className='tasks'>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
)

const Column = ({arr=[]}) => (
    <div>
        {arr!=null && arr.map((item, index) => (
            // <Card key = {index} img={`${imgUrl}${item.poster_path}`} />
            <TaskDetail key={index} title={item.title} description={item.description} />
        ))}
    </div>

)


const Home = () => {
  return (
    <div className='home'>
        <div className="toDo">
            <h4>To Do</h4>
            <Column arr ={taskArr} />
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