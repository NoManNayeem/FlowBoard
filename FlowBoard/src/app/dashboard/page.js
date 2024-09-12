'use client';

import React from 'react';
import Sidebar from './DashboardComponents/Sidebar';
import KanbanBoard from './DashboardComponents/KanbanBoard';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow bg-gray-100 p-6">
                <KanbanBoard />
            </div>
        </div>
    );
};

export default Dashboard;
