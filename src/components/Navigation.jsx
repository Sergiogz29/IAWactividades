import HomeIcon from '@mui/icons-material/Home'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import BuildIcon from '@mui/icons-material/Build'
import { Button } from '@mui/material'

function Navigation() {
  return (
    <nav style={{
      padding: '16px',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center'
      }}>
        <Button startIcon={<HomeIcon />} variant="contained">Inicio</Button>
        <Button startIcon={<ContactMailIcon />} variant="contained">Contacto</Button>
        <Button startIcon={<BuildIcon />} variant="contained">Servicios</Button>
        <Button startIcon={<BuildIcon />} variant="contained">Noticias</Button>
      </div>
    </nav>
  )
}

export default Navigation