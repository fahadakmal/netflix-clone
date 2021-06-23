import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      console.log(request);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);


  

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner-title">{movie.title || movie.original_name || movie.name}</h1>
      
      <div className="bnaner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">
          {movie.overview}
      </h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
};
