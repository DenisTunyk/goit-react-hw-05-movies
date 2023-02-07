import { useEffect, useState } from 'react';
import { fetchPopularToday } from '../api/api';

export const Home = () => {
  const [populaFilmsToday, setPopulaFilmsToday] = useState([]);
  const nowDate = new Date();

  useEffect(() => {
    async function foo() {
      try {
        const data = await fetchPopularToday();
        setPopulaFilmsToday(data);
      } catch (error) {
        console.log(error);
      }
    }
    foo();
  }, []);

  //console.log(populaFilmsToday);

  return (
    <div>
      <h2>
        20 популярных фильмов сегодня ({nowDate.getDate()}{' '}
        {nowDate.getMonth() + 1} {nowDate.getFullYear()})
      </h2>
    </div>
  );
};
