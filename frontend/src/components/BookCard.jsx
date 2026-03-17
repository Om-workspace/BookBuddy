import { Book, Bookmark } from 'lucide-react';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card animate-fade-in glass-panel">
      <div className="book-cover-placeholder">
        <Book size={48} className="cover-icon text-accent" />
        <div className="cover-genre">{book.genre}</div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <div className="book-tags">
          <span className="tag genre-tag">{book.genre}</span>
        </div>
        <p className="book-description">
          {book.description && book.description.length > 100
            ? `${book.description.substring(0, 100)}...`
            : book.description || 'No description available for this book.'}
        </p>
        <button className="btn-secondary read-more-btn">
          <Bookmark size={16} /> Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
