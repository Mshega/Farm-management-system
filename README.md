# Overview

This Project Management System is designed to help managers efficiently inform owners about ongoing processes within the organization. It offers functionalities such as task scheduling, meeting management, progress tracking, and communication facilitation through task updates and announcements. Developed using Node.js, TypeScript, and MySQL databases, this system provides a robust solution for organizational management and communication.

## Features

- Task Scheduling
- Meeting Management
- Company Progress Tracking
- Internal Communication via Announcements

## Prerequisites

- Node.js
- XAMPP (for MySQL Database)
- Command Line Interface (CLI)

## Installation

### Step 1: Install Node.js

- Ensure you have Node.js installed on your system. You can download it from the Node.js official website.

### Step 2: Install XAMPP

- Download and install XAMPP from the official website.

### Step 3: Set Up MySQL Database

- Open XAMPP Control Panel.
- Start the Apache and MySQL modules.
- Open phpMyAdmin by clicking on the "Admin" button in the XAMPP Control Panel next to MySQL.
- Create a new database named project_management.
- Import the provided SQL file (project_management.sql) into the project_management database to set up the required tables and data.

### Step 4: Clone the Repository

- Clone this repository to your local machine using the command:
```js
git clone https://github.com/your-repository/project-management-system.git
```

### Step 5: Install Dependencies

- Navigate to the project directory and install the required Node.js dependencies:
```js
cd project-management-system
npm install
```

## Configuration

### Database Configuration

- Create a .env file in the root directory of the project and add the following configuration details:
```js
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=project_management
```

Replace your password with the actual password for your MySQL root user.

## Running the Application

### Step 1: Start XAMPP

- Ensure that the Apache and MySQL services are running in the XAMPP Control Panel.

### Step 2: Start the Node.js Server

- Start the application by running the following command in the project directory:
```js
npm start
```

### Step 3: Access the Application

- Open your web browser and navigate to http://localhost:3000 to access the Project Management System.

## Usage

### Task Scheduling

- Managers can schedule tasks for team members, assign deadlines, and track task completion status.

### Meeting Management

- Organize and schedule meetings effortlessly. Notify attendees and manage meeting agendas.
- 
### Progress Tracking

- Track the overall progress of the company, individual projects, and team performance through a comprehensive dashboard.

### Internal Communication

- Facilitate communication within the organization through announcements and task updates. Keep everyone informed about important updates and changes.
