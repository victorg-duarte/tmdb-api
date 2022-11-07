import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AiFillGithub } from "react-icons/ai";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer><a target='_blank' href="https://github.com/victorg-duarte"><AiFillGithub /><span>victorg-duarte</span></a></footer>
    </div>
  );
}

export default App;
