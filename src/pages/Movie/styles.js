import styled from "styled-components";

export const MovieHeader = styled.div`
  background-image: url(${props => props.url});
  background-position: 0 20%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 520px) {
    background-position: 80%;
  }

  ::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(to bottom, rgba(0,0,0, 0.588) 0, rgba(0,0,0, 0.588) 50%, #000 100% );
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
  padding: 2rem 1rem 0;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .info {
    margin-bottom: 2rem;
  }

  .info h3 {
    margin-bottom: .5rem;
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