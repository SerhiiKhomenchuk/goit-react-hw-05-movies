import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const searchParams = new URLSearchParams({
  api_key: '1baaa3f67deb4da4620757139c87f39d',
  language: `en-US`,
  include_adult: false,
});

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?${searchParams}`);
  const trends = data.results;

  return trends.map(({ title, poster_path, vote_average, id }) => {
    return { title, poster_path, vote_average, id };
  });
};

export const searchByName = async query => {
  const { data } = await axios.get(
    `search/movie?query=${query}&${searchParams}`
  );
  const moviesByName = data.results;
  return moviesByName.map(({ title, poster_path, vote_average, id }) => ({
    title,
    poster_path,
    vote_average,
    id,
  }));
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?${searchParams}`);
  const { title, name, vote_average, overview, genres, poster_path } = data;

  return { title, name, vote_average, overview, genres, poster_path };
};

export const getCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits?${searchParams}`);
  const dataCast = data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });

  return dataCast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);
  const dataReviews = data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });

  return dataReviews;
};
