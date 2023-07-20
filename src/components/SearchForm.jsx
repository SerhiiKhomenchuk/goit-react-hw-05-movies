import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.query.value.trim().toLowerCase();
    if (!query) {
      return;
    }
    setSearchParams({ query });
  };
  return (
    <form className="p-4 bg-primary" onSubmit={handleSubmit}>
      <div className="input-group input-group-lg">
        <button type="submit" className="btn btn-primary border ">
          <i className="bi bi-search"></i>
        </button>
        <input
          name="query"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Enter name of movie..."
        />
      </div>
    </form>
  );
};

export default SearchForm;
