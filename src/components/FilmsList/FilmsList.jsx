import { FilmItem, LinkItem } from './FilmsList.styled';
import { useLocation } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      {films.map(item => {
        return (
          <FilmItem key={item.id}>
            <LinkItem to={`${item.id}`} state={{ from: location }}>
              {item.title}
            </LinkItem>
          </FilmItem>
        );
      })}
    </>
  );
};
