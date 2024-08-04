import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import "./Task.scss";

const Task = ({title, description, index}) => {
  return (
    <Draggable draggableId={title} key={title} index={index} >

        {(provided, snapshot) => (

            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isdragging={snapshot.isDragging}
            >
                <div className='task' >
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                {provided.placeholder}
            </div>

        )}
    </Draggable>
  )
}

export default Task;
