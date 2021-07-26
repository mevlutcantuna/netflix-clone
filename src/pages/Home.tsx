import React from "react";

import Navbar from "../components/navbar";
import Video from "../components/home/Video";
import MovieRow from "../components/home/MovieRow";
import requests from "../requests";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Video />
      <MovieRow
        title="Netflix Originals"
        request={requests.fetchNetflixOriginals}
        largeRow={true}
      />
      <MovieRow title="Trends" request={requests.fetchTrending} />
      <MovieRow title="Top Rated" request={requests.fetchTopRated} />
      <MovieRow title="Action Movies" request={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" request={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" request={requests.fetchHorrorMovies} />
      <MovieRow title="Documentaries" request={requests.fetchDocumentaries} />
    </>
  );
};

export default Home;
