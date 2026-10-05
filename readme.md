# Database Query Optimizer

A web-based MongoDB Query Optimizer that analyzes MongoDB queries, evaluates their execution performance, identifies potential indexing issues, and provides index recommendations.

The application allows users to connect to a MongoDB database, select a collection, submit a query, analyze its execution statistics, view optimization suggestions, and test the potential impact of a suggested index.

---

## Features

- Analyze MongoDB query execution plans
- View execution time and query performance statistics
- Detect collection scans and index scans
- Identify potential indexing issues
- Generate index recommendations
- Calculate a query performance score
- Estimate potential performance improvements
- Simulate the impact of a suggested index
- View query results
- Compare current query performance with previous statistics
- Create recommended indexes directly from the interface
- Reset collection indexes when required
- Support for MongoDB local and Atlas connections
- Simple browser-based interface
- Structured backend with separate controllers, services, routes, and utilities

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- MongoDB Atlas / Local MongoDB

### Other Tools

- Git
- GitHub
- dotenv
- npm

---

## Project Structure

```text
database-query-optimizer/
│
├── api/
│   └── index.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- MongoDB (local installation or MongoDB Atlas)
- Git

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Raveena-thakur/database-query-optimizer.git
cd database-query-optimizer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root directory.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit the `.env` file to GitHub.

For MongoDB Atlas, replace `your_mongodb_connection_string` with your own MongoDB Atlas connection string.

**Never publish database usernames, passwords, API keys, or other credentials in this repository.**

### 4. Start the application

```bash
npm start
```

The application will run on:

```text
http://localhost:5000
```

---

## API Endpoints

The backend API is available under the `/api` prefix.

### Analyze Query

```text
POST /api/optimize
```

Analyzes a MongoDB query and returns execution statistics, performance information, index suggestions, and query results.

### Create Index

```text
POST /api/create-index
```

Creates the recommended index on the selected MongoDB collection.

### Reset Indexes

```text
POST /api/reset-indexes
```

Removes indexes from the selected collection except for the default `_id` index.

---

## Query Analysis

The optimizer analyzes MongoDB execution statistics such as:

- Execution time
- Documents examined
- Documents returned
- Keys examined
- Winning execution plan
- Collection scans
- Index scans
- Sort operations

This information is used to identify possible performance issues and generate optimization suggestions.

---

## Index Optimization

The system analyzes the structure of the MongoDB query and generates potential index recommendations.

The suggested indexes can be evaluated through the application's index simulation feature before being created.

Users can also apply a recommended index directly through the interface.

---

## Safety and Simulation

Index simulation is controlled by safeguards in the backend.

Simulation may be skipped when:

- No index suggestion is available
- The collection does not exist
- The collection is empty
- The collection exceeds the configured document limit
- Simulation is disabled through configuration
- A database operation times out

---

## Environment Variables

The application uses the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Keep all environment files and database credentials private.

---

## Important Security Note

This project is intended for development and demonstration purposes.

Do not use production database credentials while testing the application.

Use a dedicated MongoDB database/user with appropriate permissions when demonstrating the project.

Never commit `.env` files or database credentials to GitHub.

---

## Future Improvements

- Authentication and user management
- More advanced query optimization strategies
- Query history dashboard
- Additional MongoDB performance metrics
- More detailed index recommendations
- Improved deployment and production security
- Automated performance reports

---

## Author

**Raveena Thakur**

GitHub: https://github.com/Raveena-thakur

Project Repository: https://github.com/Raveena-thakur/database-query-optimizer

---

## License

This project is intended for educational and demonstration purposes.
