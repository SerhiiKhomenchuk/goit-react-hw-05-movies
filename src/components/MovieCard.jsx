import imgFallback from 'images/fallback.png';

const MovieCard = ({
  movieDetails: { title, name, vote_average, overview, genres, poster_path },
}) => {
  const movieTitle = title ?? name;

  const movieGenres = () => {
    if (genres.length === 0) {
      return 'No information';
    } else {
      return genres.map(genre => genre.name).join(', ');
    }
  };

  const userScore = () => {
    return Math.round(vote_average * 10);
  };

  const getPoster = poster_path =>
    poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : imgFallback;

  return (
    <div className="card mb-0 boarder rounded-0 rounded-top mt-0">
      <div className="row g-0">
        <div className="col-md-3 card-body  ">
          <img
            style={{ maxWidth: '200px' }}
            src={getPoster(poster_path)}
            className="img-fluid"
            alt={title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title ">{movieTitle}</h1>
            <p>User Score: {userScore()}%</p>
            <h2>Overview</h2>
            <p className="card-text">
              {overview ? overview : 'No information'}
            </p>
            <h3>Genres</h3>
            <p className="card-text">{movieGenres()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
