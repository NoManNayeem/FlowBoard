import { useState, useCallback, useEffect } from 'react'; 
import axios from 'axios';
import { TASKS_API, USERS_API } from '@/app/APIs'; // Ensure correct import of API paths
import { getCookie } from 'cookies-next';

function useTaskManager() {
    const [boardData, setBoardData] = useState({ todo: [], inprogress: [], completed: [] });
    const [users, setUsers] = useState([]);  // Store the list of users
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ id: null, title: '', description: '', status: 'todo', user: '' }); // Include 'id' for editing

    // Fetch users
    const fetchUsers = useCallback(async () => {
        try {
            const token = getCookie('token');
            const response = await axios.get(USERS_API, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(response.data);  // Populate the users state with the list of users
        } catch (err) {
            console.error("Failed to fetch users:", err);
        }
    }, []);

    // Fetch tasks
    const fetchTasks = useCallback(async () => {
        const token = getCookie('token');
        if (!token) {
            setError('Authentication required');
            return;
        }

        try {
            const response = await axios.get(TASKS_API, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const tasks = response.data.results;
            setBoardData({
                todo: tasks.filter(task => task.status === 'todo'),
                inprogress: tasks.filter(task => task.status === 'inprogress'),
                completed: tasks.filter(task => task.status === 'completed')
            });
        } catch (err) {
            console.error("Fetch error occurred:", err);
            setError(`Failed to fetch tasks: ${err.message}`);
        }
    }, []);

    const handleAddTask = useCallback(async (newTaskData) => {
        const token = getCookie('token');
        if (!token) {
            console.error('Authentication required');
            return;
        }

        try {
            await axios.post(TASKS_API, newTaskData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            fetchTasks();  // Refresh the task list after adding
        } catch (error) {
            setError('Failed to add task');
            console.error('Failed to add task:', error);
            if (error.response) {
                console.error('Response Data:', error.response.data);
            }
        } finally {
            closeModal();  // Ensure modal closes after task is added
        }
    }, [fetchTasks]);

    const handleUpdateTask = useCallback(async (taskData) => {
        const token = getCookie('token');
        try {
            await axios.patch(`${TASKS_API}${taskData.id}/`, taskData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            fetchTasks(); // Ensure the task list is refreshed after a successful update
        } catch (err) {
            setError('Failed to update task');
            console.error(err);
        }
    }, [fetchTasks]);

    // Handle drag and drop logic
    const onDragEnd = useCallback((result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceTasks = [...boardData[source.droppableId]];
        const draggedItem = sourceTasks[source.index];
        sourceTasks.splice(source.index, 1);
        const destinationTasks = [...boardData[destination.droppableId]];
        destinationTasks.splice(destination.index, 0, draggedItem);

        const newBoardData = {
            ...boardData,
            [source.droppableId]: sourceTasks,
            [destination.droppableId]: destinationTasks
        };

        setBoardData(newBoardData);

        // Update task status in the backend
        handleUpdateTask({ id: draggedItem.id, status: destination.droppableId });
    }, [boardData, handleUpdateTask]);

    useEffect(() => {
        fetchUsers();  // Fetch the users when component loads
        fetchTasks();  // Fetch the tasks when component loads
    }, [fetchUsers, fetchTasks]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return {
        boardData,
        error,
        fetchTasks,
        onDragEnd,
        openModal,
        closeModal,
        newTask,
        setNewTask,
        handleAddTask,
        handleUpdateTask,  // Return the updateTask function so that it can be used in other components
        users,  // Return the users list
        isModalOpen
    };
}

export default useTaskManager;