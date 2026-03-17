# 📚 BookBuddy AI

A production-ready AI-powered book recommendation system built with FastAPI, PostgreSQL, and Docker. The system provides personalized book suggestions based on user preferences like genre, mood, and interests, while demonstrating modern DevOps and cloud deployment practices.

---

## 🚀 Features

* 🔍 Personalized book recommendations (genre, mood, preferences)
* ⚡ FastAPI backend with async support
* 🧠 AI-based recommendation engine (extendable)
* 🗄️ PostgreSQL database integration
* 🐳 Fully Dockerized application
* 🔄 CI/CD pipeline using GitHub Actions
* ☁️ Deployment on AWS EC2 with Nginx
* 📊 Logging and basic monitoring setup
* 🧱 Clean and scalable project architecture

---

## 🏗️ Architecture

User → FastAPI → Recommendation Engine → PostgreSQL
          ↓
         Logging & Monitoring
          ↓
Docker → GitHub Actions → AWS EC2 → Nginx

---

## 📁 Project Structure

```
bookbuddy-ai/
│
├── app/
│   ├── api/            # API routes
│   ├── core/           # config & settings
│   ├── db/             # database connection
│   ├── models/         # SQLAlchemy models
│   ├── schemas/        # Pydantic schemas
│   ├── services/       # business & AI logic
│   └── main.py         # entry point
│
├── tests/              # unit tests
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

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

### 2. Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
uvicorn app.main:app --reload
```

App will be available at:
👉 http://127.0.0.1:8000

Docs:
👉 http://127.0.0.1:8000/docs

---

## 🐳 Docker Setup

### Build and run using Docker

```bash
docker-compose up --build
```

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
