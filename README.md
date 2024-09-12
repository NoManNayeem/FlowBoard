
# FlowBoard Project


### 1. Task Management (CRUD Operations)
#### Functional Requirements:
- **Create Tasks**: Users can create a new task with the following fields:
  - **Title**: The name of the task.
  - **Description**: A detailed explanation of the task.
  - **Status**: Initial task status (To Do, In Progress, or Completed).
  - **Due Date**: Deadline by which the task should be completed.
- **Read Tasks**: Display a list of tasks in the system, including:
  - **Title**
  - **Description**
  - **Status**
  - **Due Date**
- **Update Tasks**: Users can modify existing task details, such as changing the status, updating the description, or adjusting the due date.
- **Delete Tasks**: Users can remove tasks from the system.

### 2. Task Management - Kanban Board
#### Functional Requirements:
- **Kanban Interface**: Display tasks on a Kanban board in columns representing task statuses:
  - **To Do**
  - **In Progress**
  - **Completed**
- **Drag and Drop**: Users can move tasks between statuses by dragging and dropping them from one column to another.
- **Task Interaction**: Users can:
  - **Create new tasks** directly from the Kanban board interface.
  - **Update task details** from the board by clicking on a task and editing its details.
  - **Delete tasks** by selecting and removing them from the board.
- **Backend Integration**: Ensure all actions (create, update, delete, status change) on the board are integrated with the backend API for data consistency.

[Watch the video on YouTube](https://youtu.be/D03crFUKUGg)


This project comprises two main components:
- **FlowBoard**: The frontend, built with Next.js.
- **FlowBoard_BE**: The backend, built using Django Rest Framework.

## Prerequisites

To run this project, you will need:
- Docker: For containerizing the application.
- Node.js: For running the Next.js frontend.
- Python: For running the Django backend.
- Git: For source control management.

## Setup Instructions

### Cloning the Repository

Clone the repository to get started with the project:

```bash
git clone https://github.com/NoManNayeem/FlowBoard.git
cd FlowBoard_Project
```

### Running with Docker

1. **Navigate to the project directory**:
    ```bash
    cd FlowBoard_Project
    ```

2. **Build and run the Docker containers**:
    ```bash
    docker-compose up --build
    ```

This command will start the backend on port 8000 and the frontend on port 3000.

### Running Locally Without Docker

#### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd FlowBoard_BE
    ```

2. **Create a virtual environment and activate it**:
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Django development server**:
    ```bash
    python manage.py runserver
    ```

#### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd FlowBoard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the Next.js development server**:
    ```bash
    npm run dev
    ```


# FlowBoard - Scope of Work

## 1. Task Management (CRUD Operations)
- Implement Create, Read, Update, and Delete (CRUD) operations for tasks.
- Tasks should have the following fields:
  - **Title**
  - **Description**
  - **Status** (e.g., To Do, In Progress, Completed)
  - **Due Date**
- Users should have the ability to create tasks with these fields according to their needs.

## 2. Task Management (Kanban Board)
- Display tasks in a **Kanban board** style interface.
- Allow users to drag and drop tasks between statuses such as:
  - **To Do**
  - **In Progress**
  - **Completed**
- Enable users to create, update, and delete tasks directly within the Kanban board.
- Integrate the Kanban board with backend APIs for task management operations.

## 3. Backend Development
- Develop API endpoints to handle CRUD operations for task management.
- Ensure that task data, including title, description, status, and due date, is stored and retrieved correctly via these API endpoints.

## 4. Authentication
- Implement **session-based authentication** for users.
- Ensure that only authenticated users can manage tasks within the dashboard.

## 5. Technical Stack

### Frontend:
- **React.js** or **Next.js** for UI/UX design and interactions.

### Backend:
- **Python (Django)** for backend logic and task management API endpoints.

### Database:
- **MongoDB** for storing task data.

## 6. Additional Considerations

### UI/UX Design:
- Create a clean and intuitive design for managing tasks, navigating menus, and interacting with the Kanban board.
- Utilize tools such as **Vercel's v0** for UI/UX optimization if necessary.

### File Structure:
- Set up a scalable and maintainable folder structure for both the frontend and backend.

### CI/CD Pipeline:
- Implement a **CI/CD pipeline** to automatically deploy updates to a hosting service.
- Tools: **CircleCI, AWS, Docker**, and **Genez.io**.

## 7. Deliverables

### 1. Deployed Application URL:
- Provide a working URL of the deployed dashboard platform.

### 2. GitHub Repository:
- Provide access to a **GitHub repository** containing:
  - All project code
  - CI/CD pipeline setup
