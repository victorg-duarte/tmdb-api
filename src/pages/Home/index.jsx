import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

import '../../assets/css/MoviesGrid.css'
import Loading from "../../components/Loading";

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const type = 'movie'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  async function getTopRatedMovies(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTopMovies(data.results)
    } catch (error) {
      console.log('error');
    }

  }

  useEffect(() => {
    const url = `${api}${type}/top_rated?${apiKey}&language=pt-BR`
    getTopRatedMovies(url)
  }, [])


  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies && topMovies.length > 0 ? (topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)) : <Loading />}
      </div>
    </div>
  );
};

export default Home;
