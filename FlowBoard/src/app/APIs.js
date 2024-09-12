// Centralized API endpoints

// Base URL of your backend server
export const BaseURL = "http://127.0.0.1:8000";

// API Endpoints
export const LOGIN_API = `${BaseURL}/auth/token/`;
export const USERS_API = `${BaseURL}/auth/users/`;
export const TASKS_API = `${BaseURL}/api/tasks/`;  // Corrected endpoint for tasks
