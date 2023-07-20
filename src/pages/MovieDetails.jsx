import { getMovieDetails } from 'api/movies-services';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard';
import { Section } from 'components/Section';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const asyncWraperMovieDetails = async () => {
      try {
        const dataDetails = await getMovieDetails(movieId);

        setmovieDetails(dataDetails);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWraperMovieDetails();
  }, [movieId]);

  return (
    <Section>
      <button
        type="button"
        className="btn btn-outline-secondary bg-primary-subtle mt-4 mb-1"
      >
        <NavLink
          to={backLinkLocationRef.current}
          className="link-underline link-underline-opacity-0 "
        >
          {'<<<'} Go back
        </NavLink>
      </button>
      {isLoading && <Loader />}
      {error ? (
        <div>Page not found</div>
      ) : (
        movieDetails && <MovieCard movieDetails={movieDetails} />
      )}

      <div className="container border border-top-0 rounded-bottom">
        <p>Additional information</p>
        <ul className="gap-1">
          <li>
            <NavLink
              className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 mb-2"
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MovieDetails;
