import axios from 'axios';

const API_KEY = '0b3d743f3f92a06f6315b4265b25aead';

export const fetchPopularToday = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        api_key: API_KEY,
        page: 1,
        region: 'UA',
        language: 'ru-RU',
      },
    }
  );
  return response.data;
};

export const fetchGetFilmsId = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      region: 'UA',
      language: 'ru-RU',
    },
  });
  return response.data;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        region: 'UA',
        language: 'ru-RU',
        page: 1,
        query: query,
      },
    }
  );
  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
      },
    }
  );
  return response.data;
};

export const fetchGetReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        page: 1,
      },
    }
  );
  return response.data;
};
