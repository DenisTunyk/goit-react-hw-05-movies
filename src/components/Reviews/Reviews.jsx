import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchGetReviews } from './../../api/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchGetReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  const isResults = () => {
    if (reviews.length === 0) return false;
    else return true;
  };

  return (
    <div>
      {!isResults() && (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <p>{item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!isResults() && <p>We don't have any reviews for this movies</p>}
    </div>
  );
};
