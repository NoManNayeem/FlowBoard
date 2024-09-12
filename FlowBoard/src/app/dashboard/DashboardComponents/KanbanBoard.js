'use client';

import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { FaPlus } from 'react-icons/fa';
import Modal from './TaskEditModal';
import useTaskManager from './useTaskManager';  // Ensure this path is correct

export default function KanbanBoard() {
    const {
        boardData,
        error,
        fetchTasks,
        onDragEnd,
        openModal,
        closeModal,
        newTask,
        setNewTask,
        handleAddTask,
        handleUpdateTask,  // Get the update task handler
        users,  // Get the users from useTaskManager
        isModalOpen
    } = useTaskManager();

    useEffect(() => {
        fetchTasks();  // Ensure tasks are fetched when component is mounted
    }, [fetchTasks]);

    const handleSubmitTask = (e) => {
        e.preventDefault();
        if (newTask.title) {  // Ensure title is present before submitting
            if (newTask.id) {
                handleUpdateTask(newTask);  // If task has an ID, update it
            } else {
                handleAddTask(newTask);  // If no ID, add it
            }
            closeModal();  // Close modal after submission
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-10 flex flex-col h-screen bg-gray-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">Kanban Board</h1>
                <button
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 transition duration-200 shadow-md"
                    onClick={() => {
                        setNewTask({ id: null, title: '', description: '', status: 'todo', user: '' });
                        openModal();
                    }}
                    aria-label="Add New Task"
                >
                    <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
            </div>

            {/* Error Handling */}
            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

            {/* Drag and Drop Context */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(boardData).map(([status, items]) => (
                        <Droppable key={status} droppableId={status}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`bg-white rounded-lg shadow-lg p-4 transition duration-200 ${snapshot.isDraggingOver ? 'bg-green-100' : 'bg-gray-100'}`}
                                >
                                    <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center capitalize text-gray-800">{status}</h2>
                                    <div style={{ minHeight: '150px' }}>
                                        {items.map((item, index) => (
                                            <TaskCard
                                                key={item.id}
                                                data={item}
                                                index={index}
                                                onEdit={() => {
                                                    setNewTask(item);  // Pre-fill the modal with task data for editing
                                                    openModal();
                                                }}
                                            />
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {/* Modal for adding/editing tasks */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmitTask}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            placeholder="Description"
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {/* User Select Dropdown */}
                        <select
                            value={newTask.user}
                            onChange={(e) => setNewTask({ ...newTask, user: e.target.value })}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select User</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>{user.username}</option>
                            ))}
                        </select>
                        {/* Status Dropdown */}
                        <select
                            value={newTask.status}
                            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="todo">To Do</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200">Save</button>
                    </form>
                </Modal>
            )}
        </div>
    );
}
