import { useState } from 'react';
import heroes from '../heroes.json'
import { FormControl, InputLabel, Select, MenuItem, List } from '@mui/material'

const publisherToShow = "Marvel Comics" // Cambiar aquí a "DC Comics" cuando quieras ver los otros héroes

function ListarHeroes() {
  const [selectedHero, setSelectedHero] = useState('');
  const heroesFiltered = heroes.filter(hero => hero.publisher === publisherToShow)

  return (
    <div>
      <h3>Héroes de {publisherToShow}</h3>
      <FormControl fullWidth>
        <InputLabel>Selecciona un héroe</InputLabel>
        <Select
          value={selectedHero}
          label="Selecciona un héroe"
          onChange={(e) => setSelectedHero(e.target.value)}
        >
          {heroesFiltered.map(hero => (
            <MenuItem key={hero.superhero} value={hero.superhero}>
              {hero.superhero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default ListarHeroes