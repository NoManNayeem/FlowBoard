'use client';

import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow hover:bg-gray-300 transition">
            <h4 className="text-lg font-bold">{task.title}</h4>
        </div>
    );
};

export default TaskCard;
