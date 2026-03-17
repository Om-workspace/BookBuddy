# 📚 BookBuddy AI

A production-ready AI-powered book recommendation system built with FastAPI, PostgreSQL, and Docker. The system provides personalized book suggestions based on user preferences like genre, mood, and interests, while demonstrating modern DevOps and cloud deployment practices.

---

## 🚀 Features

* 🔍 Personalized book recommendations (genre, mood, preferences)
* ⚡ FastAPI backend with async support
* ⚛️ Beautiful React frontend powered by Vite and Lucide React
* 🧠 AI-based recommendation engine (extendable)
* 🗄️ PostgreSQL database integration
* 🐳 Fully Dockerized application (backend + frontend)
* 🔄 CI/CD pipeline using GitHub Actions for full stack
* ☁️ Deployment on AWS EC2 with Nginx
* 📊 Logging and basic monitoring setup
* 🧱 Clean and scalable project architecture

---

## 🏗️ Architecture

User → React Frontend (Nginx) → FastAPI → Recommendation Engine → PostgreSQL
                    ↓
             Logging & Monitoring
                    ↓
Docker → GitHub Actions → AWS EC2 → Nginx

---

## 📁 Project Structure

```
BookBuddy-main/
│
├── frontend/           # React frontend application
│   ├── src/            # UI components, pages, api hooks
│   ├── Dockerfile      # Frontend container configuration
│   └── package.json    # Node dependencies
│
├── bookbuddy-ai/       # FastAPI backend application
│   ├── app/            # API routes, services, DB models
│   ├── tests/          # backend unit tests
│   ├── Dockerfile      # Backend container configuration
│   └── requirements.txt
│
├── docker-compose.yml  # Unified Docker Compose config
├── .github/workflows/  # CI/CD pipelines
└── README.md
```

---

## ⚙️ Tech Stack

* **Frontend:** React, Vite, CSS Modules, Lucide React
* **Backend:** FastAPI (Python)
* **Database:** PostgreSQL
* **ORM:** SQLAlchemy
* **Containerization:** Docker, Docker Compose
* **CI/CD:** GitHub Actions
* **Cloud:** AWS EC2
* **Web Server:** Nginx

---

## 🧪 Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookbuddy-ai.git
cd bookbuddy-ai
```

### 2. Backend Setup (bookbuddy-ai)

```bash
cd bookbuddy-ai
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API available at: 👉 http://127.0.0.1:8000/docs

### 3. Frontend Setup (frontend)

In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
App will be available at: 👉 http://localhost:5173

---

## 🐳 Docker Setup

### Build and run both backend and frontend using Docker

From the root project directory, run:

```bash
docker-compose up --build
```

The React frontend will be accessible at: 👉 http://localhost:5173
The FastAPI backend will be accessible at: 👉 http://localhost:8000

---

## 🔄 CI/CD Pipeline

* Automated testing and build using GitHub Actions
* Docker image build and deployment workflow
* Ready for integration with AWS deployment

---

## ☁️ Deployment (AWS EC2)

* Application deployed on EC2 instance
* Nginx used as reverse proxy
* Docker used for consistent environment

---

## 📊 Future Improvements

* 🔥 Advanced AI (collaborative filtering / embeddings)
* 🔐 Authentication (JWT-based)
* 📈 Monitoring with Prometheus + Grafana
* 📦 Kubernetes deployment
* 🧪 Test coverage improvements

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**
DevOps & Backend Enthusiast 🚀
