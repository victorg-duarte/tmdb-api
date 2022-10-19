import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loading";


const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../../assets/css/MoviesGrid.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  async function getSearchedMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const url = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`
    getSearchedMovies(url)
  }, [query])

  return (
    <div className="container">
      <h2 className="title">
        Resultado para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <Loading />}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
