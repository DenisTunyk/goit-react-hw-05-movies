import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { FlexContainer, Img, Content } from './MovieDetails.styled';
import { fetchGetFilmsId } from '../api/api';
import { useState, useEffect, useRef } from 'react';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmItem, setFilmItem] = useState({});
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getFilmsId() {
      try {
        const data = await fetchGetFilmsId(movieId);
        setFilmItem(data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsId();
  }, [movieId]);

  const imgPath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${filmItem.backdrop_path}`;

  return (
    <>
      <BackLink to={locRef.current}>Back to products</BackLink>
      <FlexContainer>
        <Img src={imgPath}></Img>
        <Content>
          <h3>{filmItem.title}</h3>
          <p>Use score: {Math.trunc(filmItem.vote_average * 10)} %</p>
          <h4>Overview</h4>
          <p>{filmItem.overview}</p>
          <h4>Genres</h4>
          <p>
            {filmItem.genres?.map(item => {
              return <span key={item.id}>{item.name} </span>;
            })}
          </p>
        </Content>
      </FlexContainer>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
