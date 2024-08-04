import React, { useEffect, useState } from 'react'
import "./Home.scss";
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../column/Column';


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

const Home = () => {

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


    const handleDragEnd = (result) =>{

        const {source, destination} = result;
        
        if(!destination)return;
        
        if(source.droppableId == destination.droppableId && source.index == destination.index) return;
 
        const sourceColumn = columnsData[source.droppableId];
        const destColumn = columnsData[destination.droppableId];
        const sourceItems = [...sourceColumn.tasks];
        
        const [removed] = sourceItems.splice(source.index, 1);
        
        if(source.droppableId==destination.droppableId){
            sourceItems.splice(destination.index, 0, removed);
            
            setColumnsData({
                ...columnsData,
                [source.droppableId]: {...sourceColumn, tasks: sourceItems}
            });
        } else{
            
            const destItems = [...destColumn.tasks];
            destItems.splice(destination.index, 0, removed);

            setColumnsData({
                ...columnsData,
                [source.droppableId]: {...sourceColumn, tasks: sourceItems},
                [destination.droppableId]: {...destColumn, tasks: destItems}
            });
        }

    }

    // function findItemById(id, array){
    //     return array.find((item) => item.id == id);
    // }

    // function removeItemById(id, array){
    //     return array.filter((item) => item.id != id);
    // }


  return (
    <DragDropContext onDragEnd={handleDragEnd} >

        <div className='homeContainer'>

            <Column title={"ToDo"} tasks={columnsData.todo.tasks} id={"todo"} />
            <Column title={"In Progress"} tasks={columnsData.inProgress.tasks} id={"inProgress"} />
            <Column title={"Peer Review"} tasks={columnsData.peerReview.tasks} id={"peerReview"} />
            <Column title={"Done"} tasks={columnsData.done.tasks} id={"done"} />
        </div>

    </DragDropContext>
  )
}

export default Home