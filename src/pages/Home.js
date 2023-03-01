import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Slider from "../components/Slider";
import LatestProducts from "../components/LatestProducts";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import LogOut from "./LogOut";

function Home() {
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const api_key = `api_key=22c4c5f1f0265a74ce54c0a7c011c639`;
    const base_url = `https://api.themoviedb.org/3`;
    const api_url = `${base_url}/discover/movie/?certification_country=US&certification=R&sort_by=vote_+average.desc&${api_key}`;
    axios
      .get(`${api_url}`)
      .then((resp) => setMovie(resp.data.results.splice(0, 4)))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      <Header />
      <LogOut />
      <Slider />
      <LatestProducts movies={movies} />
      <About />
      <Footer />
    </>
  );
}

export default Home;
