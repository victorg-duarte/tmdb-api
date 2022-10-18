import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";

import './Movie.css'
import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loading";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  async function getMovie(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      data.genres = data.genres.map(g => g.name)
      setMovie(data)  
    } catch (error) {
      console.error('error')
    }
    
  }

  function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', notation: 'compact', currency: 'USD' }).format(number)
  }

  useEffect(() => {
    const url = `${moviesURL}${id}?${apiKey}&language=pt-BR`
    getMovie(url)
  }, [])

  return (
    <div className="movie-page">
      {movie ? (
        <div className="movie-detail">
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BiMovie /> Gênero:
            </h3>
            <p>{movie.genres.join(', ')}</p>
          </div>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime}min</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </div>)
        : <Loading />}
    </div>
  );
};

export default Movie;
