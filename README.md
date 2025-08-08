
## 📝 MERN Job Board App

A full-stack **Job Board** application built with the **MERN** stack, enabling users to view, add, edit, and delete job postings with a sleek UI and responsive design.

### 📦 Tech Stack
    1. Backend: Node.js, Express.js, MongoDB, Mongoose
    2. Frontend: React (Vite), Shadcn UI, Tailwind CSS


### 🚀 Installation

### 1. Clone the Repository

```bash
https://github.com/abhishekkumar011/Job-Board.git
cd Job-Board
```

### 2. Backend Setup
Go to the backend directory:
```bash
cd backend
npm install
```
Create a .env file inside backend/ and add:

```bash
PORT=8000
MONGODB_URI=YOUR MONGODB URI
```

Start the backend server:
```bash
npm start
```

The backend will run at: http://localhost:8000/api/v1/jobs/

#### API Endpoints:

| Method | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/` | Create new job |
| `GET` | `/` | Fetch all jobs |    
| `Put` | `/` | Update a job details |  
| `DELETE` | `/` | Delete a job |  

### 2. Frontend Setup

Go to the frontend directory
```bash
cd frontend
npm install
```

Create a .env file inside frontend/ and add:
```bash
VITE_API_ENDPOINT=http://localhost:8000/api/v1/jobs/
```

Start the frontend development server:
```bash
npm run dev
```
The frontend will run at: http://localhost:5173

### ✨ Features
Submit Feedback: Fill in name, email, feedback text, and select a category (Suggestion, Bug, Feature Request).

#### Feedback Dashboard:

```bash
1. View Jobs – Browse a list of job postings with title, company, type, salary, requirements and location.
2. Add Job – Create new job listings using an intuitive form.
3. Edit Job – Update existing jobs with pre-filled data.
4. Delete Job – Remove jobs with confirmation prompts.
5 Toast Notifications – Instant feedback for success and error actions.
6. Responsive UI – Fully optimized for desktop and mobile.
```
## Screenshots

![App Screenshot](https://github.com/abhishekkumar011/Job-Board/blob/main/heroSection.png?raw=true)

![App Screenshot](https://github.com/abhishekkumar011/Job-Board/blob/main/listJobs.png?raw=true)

![App Screenshot](https://github.com/abhishekkumar011/Job-Board/blob/main/jobForm.png?raw=true)


