import { useState, useEffect } from 'react';
import { Layers, Search, Loader2 } from 'lucide-react';
import BookCard from '../components/BookCard';
import { getBooks } from '../api/client';
import './Library.css';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library container animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title"><Layers className="title-icon" /> Book Library</h1>
          <p className="page-subtitle">Browse through the entire collection of available books.</p>
        </div>
        <div className="search-bar glass-panel">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by title, author, or genre..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <Loader2 className="spinner" size={40} />
          <p>Loading library...</p>
        </div>
      ) : filteredBooks.length > 0 ? (
        <div className="books-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="empty-state glass-panel">
          <Layers size={64} className="empty-icon" />
          <h2>No books found</h2>
          <p>Try adjusting your search criteria or add new books to the library.</p>
        </div>
      )}
    </div>
  );
};

export default Library;
