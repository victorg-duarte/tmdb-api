import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GiClapperboard } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import { Header, SearchMobile } from "./styles";

const Navbar = ({ showSearchMobile, setshowSearchMobile }) => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate() // hook do react-router-dom: funcoes de redirecionamento

  function handleSubmit(e) {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
  return (
    <Header>
      <nav id="navbar">
        <h2>
          <Link to='/'>
            <GiClapperboard /> MoviesTMDB
          </Link>
        </h2>
        <form id='search-navbar' onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder='Busque um filme'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <button type='submit' className="search-btn">
            <BiSearchAlt2 />
          </button>
        </form>
        <div className="search-mobile-btn">
          <button type='button' className="search-btn" onClick={() => setshowSearchMobile(true)}>
            <BiSearchAlt2 />
          </button>
        </div>
      </nav>
      <SearchMobile
        showSearchMobile={showSearchMobile}>
        <IoMdClose onClick={() => setshowSearchMobile(false)} />
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder='Busque um filme'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <button
            type='submit'
            onClick={() => setshowSearchMobile(false)}
            className="search-btn">
            <BiSearchAlt2 />
          </button>
        </form>
      </SearchMobile>
    </Header>
  );
};

export default Navbar;
