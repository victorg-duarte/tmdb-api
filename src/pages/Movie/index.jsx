import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";

import { MovieHeader, MovieInfo } from "./styles";
// import Loading from "../../components/Loading";
import { FaStar } from "react-icons/fa";
import { Trailer } from "../../components/Trailer";

const imageUrl = import.meta.env.VITE_IMG_BACKDROP;
const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const path = 'movie'

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
    const url = `${api}${path}/${id}?${apiKey}&language=en-US`
    getMovie(url)
  }, [])



  return (
    <>
      {movie &&
        (<>
          <MovieHeader url={imageUrl + movie.backdrop_path}>
            <div className="title">
              <h1>{movie.title} <span className="average"><FaStar id="star-svg" /> {movie.vote_average.toFixed(1)}</span></h1>
              <p className="tagline">{movie.tagline}</p>
              <div className="btn-movie-header">
                <Trailer idMovie={movie.id} />
                <a href="#info-movie" className='btn-movie'>Informations</a>
              </div>
            </div>
          </MovieHeader>
          <MovieInfo id="info-movie">
            <div className="info">
              <h3>
                <BiMovie /> Genres:
              </h3>
              <p>{movie.genres.join(', ')}</p>
            </div>
            <div className="info">
              <h3>
                <BsWallet2 /> Budget:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duration:
              </h3>
              <p>{movie.runtime}min</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Description:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </MovieInfo>
        </>)
        // : <div style={{ display: 'flex', justifyContent: 'center' }}><Loading /></div>
      }
    </>
  );
};

export default Movie;
