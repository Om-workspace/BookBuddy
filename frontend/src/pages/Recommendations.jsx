import { useState } from 'react';
import { Sparkles, Compass, Loader2 } from 'lucide-react';
import BookCard from '../components/BookCard';
import { getRecommendations } from '../api/client';
import './Recommendations.css';

const Recommendations = () => {
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleRecommend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    try {
      const data = await getRecommendations(genre || undefined, mood || undefined);
      setBooks(data);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations container animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title"><Sparkles className="title-icon" /> AI Recommendations</h1>
          <p className="page-subtitle">Let our AI find the perfect book for your current mood.</p>
        </div>
      </div>

      <div className="rec-layout">
        <aside className="filters-panel glass-panel">
          <h2><Compass size={20} className="text-accent" /> Find Your Match</h2>
          <form className="filters-form" onSubmit={handleRecommend}>
            <div className="form-group">
              <label htmlFor="genre">Preferred Genre</label>
              <select 
                id="genre"
                className="input-field" 
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Any Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Non-fiction">Non-fiction</option>
                <option value="Self-help">Self-help</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="mood">Current Mood</label>
              <select 
                id="mood"
                className="input-field"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              >
                <option value="">Any Mood</option>
                <option value="Happy">Happy & Uplifting</option>
                <option value="Sad">Melancholy & Deep</option>
                <option value="Excited">Thrilling & Fast-paced</option>
                <option value="Relaxed">Calm & Cozy</option>
                <option value="Curious">Thought-provoking</option>
                <option value="Anxious">Escapism</option>
              </select>
            </div>

            <button type="submit" className="btn-primary rec-btn" disabled={loading}>
              {loading ? (
                <><Loader2 size={20} className="spinner" /> AI is Thinking...</>
              ) : (
                <><Sparkles size={20} /> Get Recommendations</>
              )}
            </button>
          </form>
        </aside>

        <section className="results-panel">
          {loading ? (
            <div className="loading-state">
              <Sparkles size={48} className="spinner text-accent" />
              <p>Curating perfect books for you...</p>
            </div>
          ) : searched ? (
            books.length > 0 ? (
              <div className="books-grid">
                {books.map((book, idx) => (
                  <div key={book.id} className={`delay-${(idx % 3 + 1) * 100}`}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state glass-panel">
                <Sparkles size={64} className="empty-icon" />
                <h2>No perfect match found</h2>
                <p>Try adjusting your genre or mood preferences, or add more books to the library.</p>
              </div>
            )
          ) : (
            <div className="empty-state glass-panel initial-state">
              <Compass size={64} className="empty-icon" />
              <h2>Ready to discover?</h2>
              <p>Select your preferences on the left and let AI do the magic.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Recommendations;
