import React, { useEffect, useState } from 'react'
import "./Home.scss";
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../column/Column';




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

    const toDoTask = localStorage.getItem("toDoTasks")?JSON.parse(localStorage.getItem("toDoTasks")):[];

    const [toDoTasks, setToDoTasks] = useState(toDoTask);

    const [inProgressTasks, setInProgressTasks] = useState(localStorage.getItem("inProgressTasks")?JSON.parse(localStorage.getItem("inProgressTasks")):[]);

    const [peerReviewTasks, setPeerReviewTasks] = useState(localStorage.getItem("peerReviewTasks")?JSON.parse(localStorage.getItem("peerReviewTasks")):[]);
    
    const [doneTasks, setDoneTasks] = useState(localStorage.getItem("doneTasks")?JSON.parse(localStorage.getItem("doneTasks")):[]);

    // const [activeCard, setActiveCard] = useState(null);

    useEffect(()=>{
        localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
    }, [toDoTasks])

    // console.log(toDoTasks);
    // useEffect(()=>{
    //     localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
    // }, [toDoTasks])

    useEffect(()=>{
        localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
    }, [inProgressTasks])

    useEffect(()=>{
        localStorage.setItem("peerReviewTasks", JSON.stringify(peerReviewTasks));
    }, [peerReviewTasks])  

    useEffect(()=>{
        localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    }, [doneTasks])
    

    const handleDragEnd = (result) =>{

        const {destination, source, draggableId} = result;

        if(!destination ||source.droppableId == destination.droppableId) return;

        deletePreviousState(source.droppableId, draggableId);

        const task = findItemById(draggableId, [...toDoTasks, ...inProgressTasks]);

        updateNewState(destination.droppableId, task);

    }

    function deletePreviousState(sourceDroppableId, taskId){
        switch (sourceDroppableId){
            case "toDo":
                setToDoTasks(removeItemById(taskId, toDoTasks));
                break;
            case "inProgress":
                setInProgressTasks(removeItemById(taskId, inProgressTasks));
                break;
            case "peerReview":
                setPeerReviewTasks(removeItemById(taskId, peerReviewTasks));
                break;
            case "done":
                setDoneTasks(removeItemById(taskId, doneTasks));
                break;
        }
    }

    function updateNewState(destinationDroppableId, task){
        let updatedTask;
        switch(destinationDroppableId){
            case "toDo":
                updatedTask = {...task};
                setToDoTasks([updatedTask, ...toDoTasks]);
                break;
            case "inProgress":
                updatedTask = {...task};
                setInProgressTasks([updatedTask, ...inProgressTasks]);
                break;
            case "peerReview":
                updatedTask = {...task};
                setPeerReviewTasks([updatedTask, ...peerReviewTasks]);
                break;
            case "done":
                updatedTask = {...task};
                setDoneTasks([updatedTask, ...doneTasks]);
                break;
        }
    }
    function findItemById(id, array){
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array){
        return array.filter((item) => item.id != id);
    }


  return (
    <DragDropContext onDragEnd={handleDragEnd} >

        <div className='homeContainer'>

            <Column title={"ToDo"} tasks={toDoTasks} id={"toDo"} />
            <Column title={"In Progress"} tasks={inProgressTasks} id={"inProgress"} />
            <Column title={"Peer Review"} tasks={peerReviewTasks} id={"peerReview"} />
            <Column title={"Done"} tasks={doneTasks} id={"done"} />
        </div>

    </DragDropContext>
  )
}

export default Home