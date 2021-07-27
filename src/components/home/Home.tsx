import React from "react";

import Video from "./Video";
import MovieRow from "./MovieRow";
import requests from "../../requests";

const Home: React.FC = () => {
  return (
    <>
      <Video />
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieRow title="Trends" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default Home;
