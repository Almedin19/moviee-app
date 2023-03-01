import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import noimage from "../no-image.png";

function Products() {
  const [page, setPage] = useState(1);
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const base_url = `https://api.themoviedb.org/3`;
    const api_key = `api_key=22c4c5f1f0265a74ce54c0a7c011c639`;
    const api_url = `${base_url}/discover/movie/?page=${page}/&certification_country=US&certification=R&sort_by=vote_+average.desc&${api_key}`;

    axios
      .get(`${api_url}`)
      .then((resp) => setMovie(resp.data.results.splice(0, 4)))
      .catch((error) => console.log(error.message));
  }, [page]);

  const prevPage = (e) => {
    e.preventDefault();

    const prev_page = page - 1;

    if (prev_page < 1) return;

    setPage(prev_page);
  };

  const nextPage = (e) => {
    e.preventDefault();

    const next_page = page + 1;

    if (next_page > 707) return;

    setPage(next_page);
  };

  return (
    <>
      <div>
        <div className="">
          <h2 style={{ textAlign: "center", padding: "40px" }}>
            Latest Products
          </h2>
        </div>
        <div className="container-movie">
          {movies &&
            movies.map((movie) => (
              <div className="movie-product">
                <div className="movie-gas" style={{ textAlign: "center" }}>
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
                  <h2>{movie.original_title}</h2>
                  <h3>
                    <Link
                      to={`/product/${movie.id}`}
                      style={{
                        textDecoration: "none",
                        border: "1px solid rgb(222, 222, 29)",
                        borderRadius: "10px",
                        padding: "8px",
                        color: "rgb(222, 222, 29)",
                      }}
                    >
                      Details
                    </Link>
                  </h3>
                  <p>Popularity: {movie.popularity}</p>
                  <p style={{ color: "rgb(222, 222, 29)" }}>
                    Rating: {movie.vote_average}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="left-right">
        <ul>
          <a href="#/" onClick={prevPage} className="pageBtn">
            &lt;
          </a>
          <a
            href="#/"
            style={{
              textDecoration: "none",
              color: "yellow",
              padding: "20px",
            }}
          >
            {page}
          </a>
          <a href="#/" onClick={nextPage} className="pageBtn">
            &gt;
          </a>
        </ul>
      </div>
    </>
  );
}
export default Products;
