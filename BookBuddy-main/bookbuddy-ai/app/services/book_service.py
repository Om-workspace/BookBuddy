from sqlalchemy.orm import Session
from app.models.book import Book

def create_book(db: Session, book_data):
    book = Book(**book_data.dict())
    db.add(book)
    db.commit()
    db.refresh(book)
    return book

def get_books(db: Session):
    return db.query(Book).all()
