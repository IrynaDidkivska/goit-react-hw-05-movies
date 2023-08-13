import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd7edc5f9c6032a710ce2eb6fede0fed8';

export const fetchTrendingMovies = async () => {
  try {
    const data = await axios.get(
      `trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const data = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchMovieByQuery = async query => {
  try {
    const data = await axios.get(
      `search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchCastMovie = async id => {
  try {
    const data = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchMoviesRewievs = async id => {
  try {
    const data = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
