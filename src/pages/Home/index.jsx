import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

import '../../assets/css/MoviesGrid.css'
import Loading from "../../components/Loading";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

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
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`
    getTopRatedMovies(topRatedUrl)
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
