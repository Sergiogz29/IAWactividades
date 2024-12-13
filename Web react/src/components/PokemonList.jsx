import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function PokemonList({ generation }) {
  const [pokemons, setPokemons] = useState([]);
  
  const getGenerationLimits = (gen) => {
    switch(gen) {
      case 1: return { start: 1, end: 151 };
      case 2: return { start: 152, end: 251 };
      case 3: return { start: 252, end: 386 };
      default: return { start: 1, end: 151 };
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const { start, end } = getGenerationLimits(generation);
      const numberOfPokemons = 10;
      const randomIds = [];
      
      while(randomIds.length < numberOfPokemons) {
        const randomId = Math.floor(Math.random() * (end - start + 1)) + start;
        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
      }

      const pokemonData = await Promise.all(
        randomIds.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            stats: {
              hp: data.stats[0].base_stat,
              attack: data.stats[1].base_stat,
              defense: data.stats[2].base_stat
            }
          };
        })
      );
      
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, [generation]);

  return (
    <Grid container spacing={3}>
      {pokemons.map((pokemon) => (
        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={pokemon.image}
              alt={pokemon.name}
              style={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HP: {pokemon.stats.hp}<br/>
                Ataque: {pokemon.stats.attack}<br/>
                Defensa: {pokemon.stats.defense}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonList;