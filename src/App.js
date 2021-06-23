import "./App.css";
import Row from "./Row";
import requests from "./requests";
import React from 'react';

import {Banner} from './Banner';
import  Nav  from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginal}
      />
      <Row
        title="Trending Now"
        isLargeRow={false}
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        isLargeRow={false}
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        isLargeRow={false}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        isLargeRow={false}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        isLargeRow={false}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        isLargeRow={false}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        isLargeRow={false}
        fetchUrl={requests.fetchDocumenteries}
      />
    </div>
  );
}

export default App;
