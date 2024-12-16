import { useEffect, useState } from 'react';
import { searchMovies } from '../../services/movies.js';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await searchMovies(query);
        if (response.total_results === 0) {
          searchParams.delete('query');
          setSearchParams(searchParams);
          setMovies([]);
          toast.error('There is no movie for this queue.');
          return;
        }
        setMovies(response.results);
      } catch {
        toast.error('Failed to search movies.');
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === '') {
      searchParams.delete('query');
      setSearchParams(searchParams);
      setMovies([]);
      toast.error('Please enter a non-empty search query.');
    } else {
      searchParams.set('query', newQuery);
      setSearchParams(searchParams);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar search={handleSearch} loading={loading} searchQuery={query} />
      {loading && <Loader />}
      {movies && <MovieList result={movies} />}
    </div>
  );
};

export default MoviesPage;
