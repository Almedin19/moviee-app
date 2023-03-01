import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function DisplayMoive(movie) {
  return (
    <div style={{ color: "white" }}>
      <h3>movie.title</h3>
      <p>{movie.overview}</p>
      <table border="1">
        <tr>
          <td>Realese Data</td>
          <td>{movie.realese_data}</td>
        </tr>
        <tr>
          <td>Spoken Language</td>
          <td>
            {movie.spoken_languages &&
              movie.spoken_languages.map((lang) => (
                <span key={lang.iso_39_1}>{lang.english_name}</span>
              ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

function Product() {
  const { id } = useParams;
  const [movie, setMovie] = useState([]);
  const base_url = `https://api.themoviedb.org/3`;
  const api_key = `api_key=22c4c5f1f0265a74ce54c0a7c011c639`;
  const api_url = `${base_url}/movie/${id}?${api_key}`;

  useEffect(() => {
    axios
      .get(`${api_url}`)
      .then((resp) => setMovie(resp.data.results.splice(0, 4)))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <div className="view-product">
        <div className="sell-product">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
            style={{
              width: "230px",
              height: "270px",
              borderRadius: "10px",
            }}
          />
          <div className="prod-details">
            <div style={{ color: "white" }}>
              <h3>movie.title</h3>
              <p>{movie.overview}</p>
              <table border="1">
                <tr>
                  <td>Realese Data</td>
                  <td>{movie.realese_data}</td>
                </tr>
                <tr>
                  <td>Spoken Language</td>
                  <td>
                    {movie.spoken_languages &&
                      movie.spoken_languages.map((lang) => (
                        <span key={lang.iso_39_1}>{lang.english_name}</span>
                      ))}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
