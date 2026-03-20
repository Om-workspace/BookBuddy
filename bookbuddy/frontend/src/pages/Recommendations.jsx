import { useState } from 'react';
import { Sparkles, Compass, RefreshCw } from 'lucide-react';
import BookCard from '../components/BookCard';
import { getRecommendations } from '../api/client';
import './Recommendations.css';

const Recommendations = () => {
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchRecommendation = async (selectedGenre, selectedMood) => {
    if (!selectedGenre && !selectedMood) return;
    setLoading(true);
    setSearched(true);
    try {
      const data = await getRecommendations(selectedGenre || undefined, selectedMood || undefined);
      setBooks(data);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreChange = (e) => {
    const val = e.target.value;
    setGenre(val);
    fetchRecommendation(val, mood);
  };

  const handleMoodChange = (e) => {
    const val = e.target.value;
    setMood(val);
    fetchRecommendation(genre, val);
  };

  const handleReroll = () => {
    fetchRecommendation(genre, mood);
  };

  return (
    <div className="recommendations container animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title"><Sparkles className="title-icon" /> AI Recommendations</h1>
          <p className="page-subtitle">Pick a genre and let us surprise you with a perfect read.</p>
        </div>
      </div>

      <div className="rec-layout">
        <aside className="filters-panel glass-panel">
          <h2><Compass size={20} className="text-accent" /> Find Your Match</h2>
          <div className="filters-form">
            <div className="form-group">
              <label htmlFor="genre">Preferred Genre</label>
              <select
                id="genre"
                className="input-field"
                value={genre}
                onChange={handleGenreChange}
              >
                <option value="">Any Genre</option>
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
              <label htmlFor="mood">Current Mood</label>
              <select
                id="mood"
                className="input-field"
                value={mood}
                onChange={handleMoodChange}
              >
                <option value="">Any Mood</option>
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

            {searched && !loading && (
              <button
                type="button"
                className="btn-secondary rec-btn"
                onClick={handleReroll}
                disabled={!genre && !mood}
              >
                <RefreshCw size={18} /> Try Another
              </button>
            )}
          </div>
        </aside>

        <section className="results-panel">
          {loading ? (
            <div className="loading-state">
              <Sparkles size={48} className="spinner text-accent" />
              <p>Finding the perfect book for you...</p>
            </div>
          ) : searched ? (
            books.length > 0 ? (
              <div className="single-result-wrap">
                <p className="result-label">
                  <Sparkles size={16} className="text-accent" /> Here's your pick
                </p>
                <BookCard book={books[0]} />
              </div>
            ) : (
              <div className="empty-state glass-panel">
                <Sparkles size={64} className="empty-icon" />
                <h2>No books found</h2>
                <p>No books match this genre/mood yet. Try a different one or add more books to the library.</p>
              </div>
            )
          ) : (
            <div className="empty-state glass-panel initial-state">
              <Compass size={64} className="empty-icon" />
              <h2>Ready to discover?</h2>
              <p>Select a genre or mood on the left and we'll instantly pick a book for you.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Recommendations;
