import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noimage from "../no-image.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Products() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const api_key = "22c4c5f1f0265a74ce54c0a7c011c639";
  const base_url = "https://api.themoviedb.org/3";

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moives", JSON.stringify(movies));
  }, [movies]);

  function handleSearch() {
    const url = `${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(
      query
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div>
        <Header />
        <br />
        <div className="search-control">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={handleSearch}
            placeholder="Search for a movie"
          />
        </div>
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            placeItems: "center",
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <div style={{ textAlign: "center" }}>
                <Link to={`/product/${movie.id}`}>
                  {movie.poster_path === null ? (
                    <img
                      src={noimage}
                      alt={movie.original_title}
                      style={{
                        width: "230px",
                        height: "270px",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                      style={{
                        width: "230px",
                        height: "270px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </Link>
                <h3>{movie.original_title}</h3>
                <h3>
                  <Link
                    to={`/product/${movie.id}`}
                    style={{
                      textDecoration: "none",
                      border: "1px solid rgb(222,222,29)",
                      borderRadius: "10px",
                      padding: "8px",
                      color: "rgb(222,222,29)",
                    }}
                  >
                    Details
                  </Link>
                </h3>
                <p style={{ color: "rgb(222,222,29)", fontSize: "16px" }}>
                  Rating: {movie.vote_average}
                </p>
                <p>Popularity: {movie.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
