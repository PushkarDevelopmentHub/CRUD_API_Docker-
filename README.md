# 🚀 CRUD API with Node.js, Express, PostgreSQL & Docker

A fully containerized **CRUD REST API** built using **Node.js**, **Express**, **PostgreSQL**, and **Docker**.

This project follows a modular and scalable architecture and includes validation, error handling, Docker support, and clean folder structure.

---

## 📌 Features

- ✔ Full CRUD API (Create, Read, Update, Delete)
- ✔ PostgreSQL database with Docker
- ✔ API validation using **Joi**
- ✔ Centralized error handling middleware
- ✔ Automatic user table creation
- ✔ Clean folder structure for scalability
- ✔ Environment variable configuration

---

🔧 Environment Variables

Create a .env file in your project root:

PORT=5000
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=crud_db
DB_PORT=5432

▶ Run Project Without Docker

Install dependencies:

npm install


Start development server:

npm run dev

📡 API Endpoints
User Routes → /api/users
Method	Endpoint	Description
POST	/create	Create new user
GET	/	Get all users
GET	/:id	Get user by ID
PUT	/:id	Update user
DELETE	/:id	Delete user
