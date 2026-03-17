from sqlalchemy.orm import Session
from app.models.book import Book

def recommend_books(db: Session, genre: str = None, mood: str = None):
    query = db.query(Book)

    if genre:
        query = query.filter(Book.genre.ilike(f"%{genre}%"))

    # simple mood logic (can expand later)
    if mood:
        if mood.lower() == "motivated":
            query = query.filter(Book.genre.ilike("%self%"))
        elif mood.lower() == "relaxed":
            query = query.filter(Book.genre.ilike("%fiction%"))

    return query.all()
