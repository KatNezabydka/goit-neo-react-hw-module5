import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjY2Mjg5OWYyMGEwMGFkMDE5MjI0YmZlNmVlY2IwNyIsIm5iZiI6MTczNDI2Nzg3Mi41MTAwMDAyLCJzdWIiOiI2NzVlZDNlMDk3N2I5ZjI2YTQxOGEwNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._rlyI2nQ2iVWvAB8g6HHFoexrtiwB4SXj2c5cRCODyY';

export const getTrendingMovies = async () => {

  const { data } = await axios(`/trending/movie/day?language=en-US`,
    {
      headers: { Authorization: `Bearer ${ACCESS_KEY}` },
    },
  );

  return data.results;
};

export const getMovie = async (id) => {
  const { data } = await axios(`/movie/${id}?language=en-US`,
    {
      headers: { Authorization: `Bearer ${ACCESS_KEY}` },
    },
  );
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios(`/movie/${id}/credits?language=en-US`,
    {
      headers: { Authorization: `Bearer ${ACCESS_KEY}` },
    },
  );
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios(`/movie/${id}/reviews?language=en-US`,
    {
      headers: { Authorization: `Bearer ${ACCESS_KEY}` },
    },
  );
  return data;
};
export const searchMovies = async (query) => {

  const { data } = await axios.get(`/search/movie?language=en-US`, {
    params: { query },
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });
  return data;
};