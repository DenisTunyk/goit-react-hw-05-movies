import axios from 'axios';

//axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '0b3d743f3f92a06f6315b4265b25aead';

export const fetchPopularToday = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    }
  );
  return response.data;
};
