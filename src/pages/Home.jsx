import { useEffect, useState } from 'react';
import { fetchPopularToday } from '../api/api';
import { FilmItem, LinkItem } from './Home.styled';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [populaFilmsToday, setPopulaFilmsToday] = useState([]);
  const nowDate = new Date();
  const location = useLocation();

  useEffect(() => {
    async function foo() {
      try {
        const data = await fetchPopularToday();
        setPopulaFilmsToday(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    foo();
  }, []);

  return (
    <div>
      <h2>
        20 популярных фильмов сегодня ({nowDate.getDate()}{' '}
        {nowDate.getMonth() + 1} {nowDate.getFullYear()})
      </h2>
      {populaFilmsToday.map(item => {
        return (
          <FilmItem key={item.id}>
            <LinkItem to={`movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </LinkItem>
          </FilmItem>
        );
      })}
    </div>
  );
};
