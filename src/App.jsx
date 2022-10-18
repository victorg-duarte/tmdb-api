import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AiFillGithub } from "react-icons/ai";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showSearchMobile, setshowSearchMobile] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = showSearchMobile ? 'hidden' : 'auto';
  }, [showSearchMobile]);

  return (
    <div className="app-container">
      <header>
        <Navbar showSearchMobile={showSearchMobile} setshowSearchMobile={setshowSearchMobile} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer><a target='_blank' href="https://github.com/victorg-duarte"><AiFillGithub /><span>victorg-duarte</span></a></footer>
    </div>
  );
}

export default App;
