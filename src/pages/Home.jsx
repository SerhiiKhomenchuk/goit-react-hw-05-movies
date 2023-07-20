import { getTrending } from 'api/movies-services';
import Loader from 'components/Loader';
import { Section } from 'components/Section';
import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const asyncWraperTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(console.log('error >>:', error));
      } finally {
        setIsLoading(false);
      }
    };
    asyncWraperTrendingMovies();
  }, []);

  return (
    <>
      <Section>
        <div className="container">
          <h1>Trending Today</h1>
          {isLoading && <Loader />}
          <MoviesList movies={movies} />
        </div>
      </Section>
    </>
  );
};

export default Home;
