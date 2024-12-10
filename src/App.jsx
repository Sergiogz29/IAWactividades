import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PokemonList from './components/PokemonList';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
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
}

export default App;