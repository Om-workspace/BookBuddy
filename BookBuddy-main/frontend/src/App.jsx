import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Library from './pages/Library';
import Recommendations from './pages/Recommendations';
import AddBook from './pages/AddBook';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/recommend" element={<Recommendations />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
