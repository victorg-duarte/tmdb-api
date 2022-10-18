import styled, { css } from "styled-components";

export const Header = styled.header`
    #navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #121212;
  }

  #navbar h2 a {
      display: flex;
      align-items: center;
      gap: .5rem;
  }

  #navbar form {
      display: flex;
      gap: .5rem;
  }

  #navbar input {
      padding: .2rem .8rem;
      border-radius: 4px;
      border: 2px solid transparent;
      transition: .5s;
  }
  #navbar input:focus {
    outline: none;
    border: 2px solid #2892d7;
  }

  #navbar #search-navbar button,
  .search-btn {
      background-color: #2892d7;
      border: 2px solid #2892d7;
      border-radius: 4px;
      color: #fff;
      padding: .3rem;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: .3s;
  }
  #navbar #search-navbar button:hover,
  .search-btn:hover{
      border: 2px solid #173753;
      background-color: #173753;
  }

  .search-mobile-btn {
    display: none;
  }

  #search-mobile {
    display: none;
  }

  /* Media Queries */

  @media (max-width: 520px) {
    .search-mobile-btn  {
      display: inherit;
    }

    #navbar #search-navbar {
      display: none;
    }
  }
`

export const SearchMobile = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  visibility:  ${({ showSearchMobile }) => showSearchMobile ? 'auto' : 'auto'};
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);
  transition: .5s;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }

  form {
      display: flex;
      gap: .5rem;
      flex-grow: 1;
  }

  form input {
      width: 100%;
      padding: .7rem .8rem;
      border-radius: 4px;
      border: 2px solid transparent;
      transition: .5s;
  }
  form input:focus {
    outline: none;
    border: 2px solid #2892d7;
  }

  form button {
      background-color: #2892d7;
      border: 2px solid #2892d7;
      border-radius: 4px;
      color: #000;
      padding: .2rem;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: .3s;
  }
  
  .search-btn:hover{
    border: 2px solid #173753;
    background-color: #173753;
  }


  @media (max-width: 520px) {
    ${({ showSearchMobile }) => showSearchMobile && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}
  }
`