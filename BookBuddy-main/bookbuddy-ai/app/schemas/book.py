from pydantic import BaseModel

class BookCreate(BaseModel):
    title: str
    author: str
    genre: str
    description: str

class BookResponse(BookCreate):
    id: int

    class Config:
        orm_mode = True
