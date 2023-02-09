import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from './../components/SearchBox/SearchBox';
import { fetchSearchMovie } from '../api/api';
import { FilmsList } from 'components/FilmsList/FilmsList';

export const Movies = () => {
  const [querySearchMovie, setQuerySearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onChange = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query === '') return;
    async function getSearchMovie() {
      try {
        const data = await fetchSearchMovie(query);
        setQuerySearchMovie(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovie();
  }, [query]);

  return (
    <div>
      <SearchBox value={query} onChange={onChange} />
      <FilmsList films={querySearchMovie} />
    </div>
  );
};
