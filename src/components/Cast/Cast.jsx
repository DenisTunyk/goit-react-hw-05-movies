import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from './../../api/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getFilmsId() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsId();
  }, [movieId]);

  return (
    <ul>
      {cast.map(item => {
        const pathImg = `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`;
        return (
          <li key={item.id}>
            <img src={pathImg} alt={item.name} />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
