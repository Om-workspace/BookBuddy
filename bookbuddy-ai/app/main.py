from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import Base, engine
from app.api.book_routes import router as book_router
from app.api.recommendation_routes import router as rec_router

app = FastAPI(title="BookBuddy AI")   # ✅ FIRST create app

# ✅ THEN add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rec_router)

# DB tables
Base.metadata.create_all(bind=engine)

# Routes
app.include_router(book_router)

@app.get("/")
def root():
    return {"message": "BookBuddy AI is running 🚀"}