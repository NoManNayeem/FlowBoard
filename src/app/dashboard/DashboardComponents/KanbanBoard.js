'use client';

import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

// Dummy data for tasks with statuses
const dummyBoardData = [
  {
    status: 'To Do',
    items: [
      { 
        id: '1', 
        title: 'Create Wireframes', 
        description: 'Design wireframes for the new homepage', 
        priority: 0, 
        assignees: [{ avt: 'https://via.placeholder.com/150' }] 
      },
      { 
        id: '2', 
        title: 'Research Competitors', 
        description: 'Analyze competitor websites for inspiration', 
        priority: 1, 
        assignees: [{ avt: 'https://via.placeholder.com/150' }] 
      }
    ]
  },
  {
    status: 'In Progress',
    items: [
      { 
        id: '3', 
        title: 'Develop Header Component', 
        description: 'Build the header component using Tailwind CSS', 
        priority: 2, 
        assignees: [{ avt: 'https://via.placeholder.com/150' }] 
      }
    ]
  },
  {
    status: 'Completed',
    items: [
      { 
        id: '4', 
        title: 'Setup Project Repository', 
        description: 'Initialize the GitHub repository with basic structure', 
        priority: 0, 
        assignees: [{ avt: 'https://via.placeholder.com/150' }] 
      }
    ]
  }
];

export default function KanbanBoard() {
  const [boardData, setBoardData] = useState(dummyBoardData);

  // Handle drag and drop functionality
  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return; // No destination, exit

    const sourceColumn = boardData.find(board => board.status === source.droppableId);
    const destColumn = boardData.find(board => board.status === destination.droppableId);
    const draggedItem = sourceColumn.items[source.index];

    if (source.droppableId !== destination.droppableId) {
      const newSourceItems = [...sourceColumn.items];
      newSourceItems.splice(source.index, 1);

      const newDestItems = [...destColumn.items];
      newDestItems.splice(destination.index, 0, draggedItem);

      const newBoardData = boardData.map(board => {
        if (board.status === source.droppableId) {
          return { ...board, items: newSourceItems };
        } else if (board.status === destination.droppableId) {
          return { ...board, items: newDestItems };
        }
        return board;
      });

      setBoardData(newBoardData); // Update board data after task move
    }
  };

  return (
    <div className="p-10 flex flex-col h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {boardData.map((board) => (
            <Droppable key={board.status} droppableId={board.status}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-gray-100 rounded-md shadow-md p-4 ${
                    snapshot.isDraggingOver ? 'bg-green-100' : ''
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-3 text-center">{board.status}</h2>
                  <div style={{ minHeight: '100px' }}>
                    {board.items.map((item, iIndex) => (
                      <TaskCard key={item.id} data={item} index={iIndex} />
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
