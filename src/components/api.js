import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});


export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon', error);
    throw error;
  }
};


export const getPokemonDetails = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles de Pokémon', error);
    throw error;
  }
};
