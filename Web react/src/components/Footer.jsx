import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '16px',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '8px'
      }}>
        <FacebookIcon style={{ cursor: 'pointer' }} />
        <TwitterIcon style={{ cursor: 'pointer' }} />
        <InstagramIcon style={{ cursor: 'pointer' }} />
      </div>
      <p>© 2024 IES Cura Valera. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer