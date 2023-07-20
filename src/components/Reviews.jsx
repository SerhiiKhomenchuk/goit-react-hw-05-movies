import { getReviews } from 'api/movies-services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const dataReviews = await getReviews(movieId);

        if (dataReviews.length === 0) {
          setError(true);
        }

        setDataReviews(dataReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {!error ? (
        <ul className="list-group list-group-flush mt-3">
          {dataReviews.map(({ author, content, id }) => (
            <li key={id} className="list-group-item">
              <p className="fw-medium">Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
