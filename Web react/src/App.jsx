import Header from './components/Header'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import NoticiasCards from './components/NoticiasCards'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Navigation />
      <main style={{
        display: 'flex',
        flex: 1,
        padding: '20px',
        gap: '20px'
      }}>
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
}

export default App