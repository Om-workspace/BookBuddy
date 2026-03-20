import { useState } from 'react';
import { PlusCircle, Book, Loader2, CheckCircle } from 'lucide-react';
import { addBook } from '../api/client';
import './AddBook.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    mood: '',
    description: '',
    pdf_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await addBook(formData);
      setSuccess(true);
      setFormData({ title: '', author: '', genre: '', mood: '', description: '', pdf_url: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to add book. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-book container animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title"><PlusCircle className="title-icon" /> Add Book</h1>
          <p className="page-subtitle">Contribute a new book to the library.</p>
        </div>
      </div>

      <div className="form-container glass-panel">
        <div className="form-icon-header">
          <Book size={48} className="text-accent" />
          <h2>Book Details</h2>
        </div>

        {success && (
          <div className="success-banner animate-fade-in">
            <CheckCircle size={20} />
            <span>Book perfectly added to your library!</span>
          </div>
        )}

        {error && (
          <div className="error-banner animate-fade-in">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="book-form">
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="input-field" 
              placeholder="e.g. The Midnight Library"
              value={formData.title}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input 
              type="text" 
              id="author" 
              name="author" 
              className="input-field" 
              placeholder="e.g. Matt Haig"
              value={formData.author}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select 
              id="genre" 
              name="genre" 
              className="input-field"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a genre...</option>
              <option value="fiction">Fiction</option>
              <option value="sci-fi">Science Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="thriller">Thriller</option>
              <option value="self-help">Self-Help</option>
              <option value="business">Business</option>
              <option value="finance">Finance</option>
              <option value="history">History</option>
              <option value="technology">Technology</option>
              <option value="biography">Biography</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mood">Mood</label>
            <select
              id="mood"
              name="mood"
              className="input-field"
              value={formData.mood}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a mood...</option>
              <option value="motivational">Motivational</option>
              <option value="inspirational">Inspirational</option>
              <option value="dark">Dark</option>
              <option value="adventurous">Adventurous</option>
              <option value="focused">Focused</option>
              <option value="educational">Educational</option>
              <option value="informative">Informative</option>
              <option value="epic">Epic</option>
              <option value="suspenseful">Suspenseful</option>
              <option value="strategic">Strategic</option>
              <option value="innovative">Innovative</option>
              <option value="survival">Survival</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Synopsis or Description</label>
            <textarea 
              id="description" 
              name="description" 
              className="input-field textarea" 
              placeholder="What is this book about?"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="pdf_url">Book / PDF URL</label>
            <input
              type="url"
              id="pdf_url"
              name="pdf_url"
              className="input-field"
              placeholder="e.g. https://drive.google.com/..."
              value={formData.pdf_url}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-primary submit-btn" disabled={loading}>
            {loading ? (
              <><Loader2 size={20} className="spinner" /> Adding Book...</>
            ) : (
              <><PlusCircle size={20} /> Add to Library</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
