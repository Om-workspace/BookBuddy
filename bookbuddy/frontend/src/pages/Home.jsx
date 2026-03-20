import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home container">
      <section className="hero">
        <div className="hero-content">
          <div className="badge animate-fade-in delay-100">
            <Sparkles size={16} className="text-accent" />
            <span>AI-Powered Recommendations</span>
          </div>
          <h1 className="hero-title animate-fade-in delay-200">
            Discover Your Next <br />
            <span className="gradient-text">Favorite Book</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-300">
            BookBuddy uses advanced AI to learn your reading preferences and suggests books that perfectly match your mood and interests.
          </p>
          <div className="hero-actions animate-fade-in delay-300">
            <Link to="/recommend" className="btn-primary">
              <Sparkles size={20} /> Get Recommendations
            </Link>
            <Link to="/library" className="btn-secondary">
              <Layers size={20} /> Browse Library <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-visual animate-fade-in delay-200">
          <div className="book-stack">
            <div className="book-card-mockup book-1 glass-panel">
              <BookOpen size={40} />
              <div className="mockup-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
              </div>
            </div>
            <div className="book-card-mockup book-2 glass-panel">
              <Sparkles size={40} />
              <div className="mockup-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
              </div>
            </div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
