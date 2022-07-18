import { React, useState, useEffect } from "react";
import "./index.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Partners from "./components/Partners/Partners";
import Discover from "./components/Discover/Discover";
import LiveArts from "./components/LiveArts/LiveArts";
import Artists from "./components/Artists/Artists";
import AllArts from "./components/AllArts/AllArts";
import CreateNft from "./components/CreateNft/CreateNft";
import Footer from "./components/Footer/Footer";
import FixedBtns from "./components/FixedBtns/FixedBtns";

export default function App() {
  useEffect(() => {
    if (localStorage.getItem("mode") === null) localStorage.setItem("mode", "dark");
  }, []);

  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  return (
    <div id="app" className={mode === "light" ? "light-mode" : ""}>
      <Header fixedNavbar={fixedNavbar} setFixedNavbar={setFixedNavbar} />
      <main>
        <Home />
        <Partners />
        <Discover />
        <LiveArts />
        <Artists />
        <AllArts />
        <CreateNft />
      </main>
      <Footer />
      <FixedBtns mode={mode} setMode={setMode} fixedNavbar={fixedNavbar} />
    </div>
  );
}
