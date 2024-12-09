import Header from './components/Header'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

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
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  )
}

export default App