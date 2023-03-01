import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DisplayMovie(movie) {
  return (
    <>
      <div className="producte-de">
        <div className="view-image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className="view-product">
          <h3 style={{ textAlign: "center", color: "rgb(219, 219, 57)" }}>
            {movie.title}
          </h3>
          <p>{movie.overview}</p>
          <table border={"1"}>
            <tr>
              <td>Realese data</td>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <td>Spoken languages</td>
              <td>
                {movie.spoken_languages &&
                  movie.spoken_languages.map((lang) => (
                    <p key={lang.iso_639_1}>{lang.english_name}</p>
                  ))}
              </td>
            </tr>
            <tr>
              <td>Genders</td>
              <td>{movie.release_date}</td>
            </tr>
          </table>
          <p></p>
        </div>
      </div>
    </>
  );
}

function Product() {
  const [movie, setMovie] = useState([]);
  //const [error, setError] = useState([]);

  const { id } = useParams();
  const api_key = `api_key=22c4c5f1f0265a74ce54c0a7c011c639`;
  const base_url = `https://api.themoviedb.org/3`;

  const api_url = `${base_url}/movie/${id}?${api_key}`;
  useEffect(() => {
    axios
      .get(api_url)
      .then((resp) => setMovie(resp.data))
      .catch((error) => console.log(error.message));
  }, [api_url]);
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <div className="view-product2">
          <div className="view-product1">{movie && DisplayMovie(movie)}</div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Product;
