from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import Optional
from app import models, schemas
from app.database import engine, get_db
import json
import random

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

@app.post("/books", response_model=schemas.BookResponse)
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db)):
    db_book = models.Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


@app.get("/books", response_model=list[schemas.BookResponse])
def get_books(db: Session = Depends(get_db)):
    return db.query(models.Book).all()


@app.get("/recommend")
def recommend(genre: Optional[str] = None, mood: Optional[str] = None, db: Session = Depends(get_db)):

    query = db.query(models.Book)

    if genre and mood:
        query = query.filter(
            (models.Book.genre == genre) | (models.Book.mood == mood)
        )
    elif genre:
        query = query.filter(models.Book.genre == genre)
    elif mood:
        query = query.filter(models.Book.mood == mood)

    books = query.all()

    if not books:
        return []

    return [random.choice(books)]

@app.post("/seed-books")
def seed_books(db: Session = Depends(get_db)):
    with open("Data/books.json") as f:
        books = json.load(f)

    count = 0

    for book in books:
        if "id" in book:
            del book["id"]
        db_book = models.Book(**book)
        db.add(db_book)
        count += 1

    db.commit()

    return {"message": f"{count} books inserted"}