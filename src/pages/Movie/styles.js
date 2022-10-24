import styled from "styled-components";

export const MovieHeader = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.588) 100%, rgba(0, 0, 0, 0) 100%), url(${props => props.url});
  background-position: 0 20%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 520px) {
    background-position: 80%;
  }

  :after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 80%, #000 100% ); /*rgba(23, 55, 83)*/
    
  }

  .title {
    grid-column: 1/4;
    grid-row: 2;
    margin: 0 1rem;
    z-index: 2;
  }

  .title h1 {
      font-size: 3rem;
  }

  .title .average {
      font-size: 1.5rem;
      color: #fff;
  }
  .title .average #star-svg {
      font-size: 1rem;
      color: #2892d7;
  }
  .title .tagline{
      font-size: 1.5rem;
  }

  .title .btn-movie-header {
    display: flex;
    gap: 1rem;
  }

  .title .btn-movie-header a{
    background-color: #2892d7;
    border: 2px solid #2892d7;
    border-radius: 4px;
    color: #fff;
    padding: .5rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s;
    width: 230px;
  }

  .title .btn-movie-header a[href='#info-movie'] {
    background-color: transparent;
    border: 2px solid #2892d7;
  }
  
  .title .btn-movie-header a:hover{
    color: #fff;
    background-color: #2892d7;
  }
`

export const MovieInfo = styled.div`

  max-width: 1600px;
  margin: 5rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .movie-card {
    max-width: 400px;
    text-align: center;
  }

  .movie-card img,
  .movie-card h2,
  .movie-card p {
    margin-bottom: 1rem;
  }

  .movie-card h2 {
    font-size: 2rem;
  }

  .movie-card p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .tagline {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    background-color: #6daedb;
    width: 100%;
    padding: .5rem 0;
    letter-spacing: .2rem;
  }

  .info {
    margin-bottom: 2rem;
    align-self: start;
  }

  .info h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .description {
    padding-bottom: 5rem;
  }

  .description p {
    line-height: 2rem;
  }
`