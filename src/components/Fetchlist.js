import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Modal } from '@mui/material';
import { getPokemonList, getPokemonDetails } from './api'; // Importa las funciones de la API

const FetchList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    // Función para obtener la lista inicial de Pokémon
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemons(data.results);
        setNextPageUrl(data.next);
      } catch (error) {
        console.error('Error al obtener la lista de Pokémon', error);
      }
    };

    fetchPokemonList();
  }, []);

  const openModal = async (pokemon) => {
    try {
      const details = await getPokemonDetails(pokemon.url);
      setSelectedPokemon(details);
      setModalOpen(true);
    } catch (error) {
      console.error('Error al obtener detalles de Pokémon', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const loadNextPage = async () => {
    if (nextPageUrl) {
      try {
        const data = await getPokemonList(nextPageUrl);
        setPokemons((prev) => [...prev, ...data.results]);
        setNextPageUrl(data.next);
      } catch (error) {
        console.error('Error al cargar la siguiente página de Pokémon', error);
      }
    }
  };

  const renderPokemonCard = (pokemon) => {
    return (
      <Grid item key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <Typography variant="h6" component="div">
                {pokemon.name}
              </Typography>
            </div>
            <div style={{ flex: '1' }}>
              <CardMedia
                component="img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`}
                alt={pokemon.name}
                style={{ maxWidth: '50px', maxHeight: '50px', margin: '0 auto' }}
              />
            </div>
            <div>
              <Button variant="outlined" onClick={() => openModal(pokemon)}>
                Ver Detalles
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  

  return (
    <div>
      <Grid container spacing={3}>
        {pokemons.map((pokemon) => renderPokemonCard(pokemon))}
      </Grid>

      <Button variant="outlined" onClick={loadNextPage}>
        Cargar Siguiente Página
      </Button>

      <Modal open={modalOpen} onClose={closeModal}>
      <div
    className="modal-content"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '70vh',
      overflowY: 'auto',
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px', // Agregar bordes redondeados
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Agregar sombra
      textAlign: 'center',
    }}
  > 
          {selectedPokemon && (
            <>
              <Typography variant="h4" component="div">
                {selectedPokemon.name}
              </Typography>
              <CardMedia
                component="img"
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
                style={{ maxWidth: '200px', margin: '0 auto' }} // Estilos para la imagen
              />
              <Typography variant="h6" component="div">
                Habilidades:
              </Typography>
              <ul>
                {selectedPokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
              <Typography variant="h6" component="div">
                Movimientos:
              </Typography>
              <ul>
                {selectedPokemon.moves.map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FetchList;
