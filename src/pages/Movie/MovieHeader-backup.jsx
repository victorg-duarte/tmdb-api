(<>
  <MovieHeader url={imageUrl + movie.backdrop_path}>
    <div className="title">
      <h1>{movie.title} <span className="average"><FaStar id="star-svg" /> {movie.vote_average.toFixed(1)}</span></h1>
      <p className="tagline">{movie.tagline}</p>
      <div className="btn-movie-header">
        <Trailer idMovie={movie.id} />
        <a href="#info-movie" className='btn-movie'>Informações</a>
      </div>
    </div>
  </MovieHeader>
  <div className="movie-detail" id="info-movie">
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
  </div>
</>)

  // branch main
  (<>
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
    </div>
  </>)