import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="list-group">
      {movies.map(({ title, id, vote_average }) => (
        <li
          key={id}
          className=" d-flex list-group-item list-group-item-action "
        >
          <Link
            to={`/${id}`}
            state={{ from: location }}
            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            <i className="bi bi-film me-2"></i>
            {title}
          </Link>
          <span className="badge  bg-primary rounded-pill ms-auto p-2  ">
            imdb: {vote_average.toFixed(1)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
