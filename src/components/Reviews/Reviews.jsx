import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchGetReviews } from './../../api/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchGetReviews(movieId);
        //setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return <p>reviews</p>;
};
