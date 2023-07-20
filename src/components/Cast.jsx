import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgFallback from 'images/fallback.png';

import { getCast } from 'api/movies-services';
import Loader from './Loader';

const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const asyncWraperGetCast = async () => {
      try {
        const dataCast = await getCast(movieId);
        if (dataCast.length === 0) {
          setError(true);
        }
        setDataCast(dataCast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWraperGetCast();
  }, [movieId]);

  const getPoster = profile_path =>
    profile_path
      ? `https://image.tmdb.org/t/p/w200${profile_path}`
      : imgFallback;

  return (
    <>
      {isLoading && <Loader />}
      {!error ? (
        <ul className="list-group list-group-flush">
          {dataCast.map(({ name, character, profile_path, id }) => (
            <li key={id} className="list-group-item">
              <div>
                <img
                  style={{ maxWidth: '100px' }}
                  className="img-thumbnail"
                  src={getPoster(profile_path)}
                  alt={name}
                />{' '}
              </div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
