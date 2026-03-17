from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.services.recommendation_service import recommend_books
from app.schemas.book import BookResponse

router = APIRouter()

@router.get("/recommend", response_model=list[BookResponse])
def get_recommendations(
    genre: str = Query(None),
    mood: str = Query(None),
    db: Session = Depends(get_db)
):
    return recommend_books(db, genre, mood)
