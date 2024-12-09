import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ListarHeroes from './ListarHeroes';

function Sidebar() {
  const [selectedHero, setSelectedHero] = useState('');
  
  return (
    <aside style={{
      width: '280px',
      padding: '16px',
      backgroundColor: '#f5f5f5'
    }}>
      <ListarHeroes />
    </aside>
  );
}

export default Sidebar;