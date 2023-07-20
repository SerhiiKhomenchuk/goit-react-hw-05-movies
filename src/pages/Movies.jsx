import { searchByName } from 'api/movies-services';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { Section } from 'components/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    const asyncWrapper = async () => {
      try {
        const queryMovies = await searchByName(query);

        if (queryMovies.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
        setMovies(queryMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query]);
  return (
    <>
      <Section>
        <h1 className="uppercase text-4xl text-gray-600 text-center">
          Search Movies
        </h1>
        <SearchForm />
        {isLoading && <Loader />}
        {error ? (
          <div>{query} film does not exist!</div>
        ) : (
          <MoviesList movies={movies} />
        )}
      </Section>
    </>
  );
};

export default Movies;
