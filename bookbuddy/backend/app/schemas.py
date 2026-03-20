from pydantic import BaseModel

from typing import Optional

class BookBase(BaseModel):
    title: str
    author: Optional[str] = None
    genre: str
    mood: Optional[str] = None
    description: Optional[str] = None
    pdf_url: Optional[str] = None

class BookCreate(BookBase):
    pass

class BookResponse(BookBase):
    id: int

    class Config:
        from_attributes = True