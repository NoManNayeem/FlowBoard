'use client';

import React from 'react';
import TaskCard from './TaskCard';

const dummyTasks = [
    { id: 1, title: 'Design homepage', status: 'To Do' },
    { id: 2, title: 'Develop login feature', status: 'In Progress' },
    { id: 3, title: 'Fix header bugs', status: 'Done' },
    { id: 4, title: 'Deploy project', status: 'To Do' },
];

const KanbanBoard = () => {
    const columns = {
        'To Do': dummyTasks.filter(task => task.status === 'To Do'),
        'In Progress': dummyTasks.filter(task => task.status === 'In Progress'),
        'Done': dummyTasks.filter(task => task.status === 'Done'),
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.keys(columns).map((status) => (
                <div key={status} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{status}</h3>
                    <div className="space-y-4">
                        {columns[status].map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
