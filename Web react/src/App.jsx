<<<<<<< HEAD:src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PokemonList from './components/PokemonList';
import Contact from './components/Contact';
=======
import Header from './components/Header'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import NoticiasCards from './components/NoticiasCards'
import { Routes, Route } from 'react-router-dom'
>>>>>>> e4144a03f467c9fbade3b3ad1569dfb5c6da12a0:Web react/src/App.jsx

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
<<<<<<< HEAD:src/App.jsx
        <Header />
        <Navigation />
        <main style={{
          flex: 1,
          padding: '20px'
        }}>
          <Routes>
            <Route path="/" element={<PokemonList generation={1} />} />
            <Route path="/gen1" element={<PokemonList generation={1} />} />
            <Route path="/gen2" element={<PokemonList generation={2} />} />
            <Route path="/gen3" element={<PokemonList generation={3} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
=======
        <Routes>
          <Route path="/" element={<><Sidebar /><Content /></>} />
          <Route path="/defensa" element={<NoticiasCards />} />
          <Route path="/gen1" element={<Content />} />
          <Route path="/gen2" element={<Content />} />
          <Route path="/gen3" element={<Content />} />
          <Route path="/contact" element={<Content />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
>>>>>>> e4144a03f467c9fbade3b3ad1569dfb5c6da12a0:Web react/src/App.jsx
}

export default App;