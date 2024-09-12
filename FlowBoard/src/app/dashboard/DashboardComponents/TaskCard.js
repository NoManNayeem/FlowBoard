'use client';

import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaGripLines, FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import Modal from './TaskEditModal';
import { TASKS_API } from '@/app/APIs';

const TaskCard = ({ data, index, fetchTasks }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editTask, setEditTask] = useState({ ...data });

    // Handle edit task submission
    const handleEditTask = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const token = getCookie('token');
        try {
            await axios.patch(`${TASKS_API}${data.id}/`, editTask, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setIsEditModalOpen(false); // Close the modal after editing
            fetchTasks(); // Refresh the board data to reflect changes
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    // Handle task deletion
    const handleDeleteTask = async () => {
        const token = getCookie('token');
        if (confirm('Are you sure you want to delete this task?')) { // Confirm deletion
            try {
                await axios.delete(`${TASKS_API}${data.id}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                fetchTasks(); // Refresh the board data after deletion
            } catch (error) {
                console.error('Failed to delete task:', error);
            }
        }
    };

    return (
        <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white rounded-md p-4 shadow-lg mb-4 relative transition duration-200 hover:shadow-xl"
                >
                    {/* Drag Handle and Action Icons */}
                    <div className="flex justify-between items-center mb-3">
                        <FaGripLines className="text-gray-400 cursor-grab" />
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setIsEditModalOpen(true)} // Open edit modal
                                className="text-gray-500 hover:text-blue-500 transition duration-200"
                                aria-label="Edit Task"
                            >
                                <FaEdit />
                            </button>
                            <button
                                onClick={handleDeleteTask} // Delete task on click
                                className="text-gray-500 hover:text-red-500 transition duration-200"
                                aria-label="Delete Task"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>

                    {/* Task Title and Description */}
                    <h5 className="text-lg font-bold text-gray-800">{data.title}</h5>
                    <p className="text-gray-600 mt-1">{data.description}</p>

                    {/* Assignees */}
                    <ul className="flex mt-3 space-x-2">
                        {data.assignees?.map((assignee, idx) => (
                            <li key={idx}>
                                <Image
                                    src={assignee.avt}
                                    alt="assignee"
                                    width={32}
                                    height={32}
                                    className="rounded-full object-cover"
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Edit Modal */}
                    {isEditModalOpen && (
                        <Modal onClose={() => setIsEditModalOpen(false)}>
                            <form className="flex flex-col gap-4" onSubmit={handleEditTask}>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={editTask.title}
                                    onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <textarea
                                    placeholder="Description"
                                    value={editTask.description}
                                    onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    value={editTask.status}
                                    onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}
                                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="todo">To Do</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
                                >
                                    Save
                                </button>
                            </form>
                        </Modal>
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
