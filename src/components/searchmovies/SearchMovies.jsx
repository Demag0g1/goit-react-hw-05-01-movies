import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import './SearchMovies.module.css';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        placeholder="Search movies"
      />
      <button type="submit">Search...</button>
    </form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
