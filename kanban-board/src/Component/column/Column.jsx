import React from 'react'
import './Column.scss';
import {Droppable} from 'react-beautiful-dnd';
import Task from '../task/Task';

const Column = ({title, tasks, id}) => {
  return (
    <div className='column'>

        <div>
            <h4>{title}</h4>
        </div>
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div
                 ref={provided.innerRef}
                 {...provided.droppableProps}
                 isDraggingOver={snapshot.isDraggingOver}
                >
                    {tasks.map((item, index) => (
                        <Task key={index} index={index} title={item.title} description={item.description} />
                    ))}

                    {provided.placeholder}
                </div>
            )}
        </Droppable>

    </div>
  )
}

export default Column;
