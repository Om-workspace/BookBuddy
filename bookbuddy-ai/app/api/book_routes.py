from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.book import BookCreate, BookResponse
from app.services.book_service import create_book, get_books

router = APIRouter()

@router.post("/books", response_model=BookResponse)
def add_book(book: BookCreate, db: Session = Depends(get_db)):
    return create_book(db, book)

@router.get("/books", response_model=list[BookResponse])
def fetch_books(db: Session = Depends(get_db)):
    return get_books(db)
