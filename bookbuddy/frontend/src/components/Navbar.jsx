import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Library, Sparkles, PlusCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <BookOpen size={20} /> },
    { path: '/library', label: 'Library', icon: <Library size={20} /> },
    { path: '/recommend', label: 'AI Recommend', icon: <Sparkles size={20} /> },
    { path: '/add-book', label: 'Add Book', icon: <PlusCircle size={20} /> }
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <BookOpen className="logo-icon text-accent" />
          <span className="gradient-text">BookBuddy AI</span>
        </Link>
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
