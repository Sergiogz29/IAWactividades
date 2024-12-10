import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ContactMailIcon from '@mui/icons-material/ContactMail';

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
        <Button component={Link} to="/" startIcon={<HomeIcon />} variant="contained">
          Inicio
        </Button>
        <Button component={Link} to="/gen1" startIcon={<CatchingPokemonIcon />} variant="contained">
          Gen 1
        </Button>
        <Button component={Link} to="/gen2" startIcon={<CatchingPokemonIcon />} variant="contained">
          Gen 2
        </Button>
        <Button component={Link} to="/gen3" startIcon={<CatchingPokemonIcon />} variant="contained">
          Gen 3
        </Button>
        <Button component={Link} to="/contact" startIcon={<ContactMailIcon />} variant="contained">
          Contacto
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;