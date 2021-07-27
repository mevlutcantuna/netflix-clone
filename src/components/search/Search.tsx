import React, { useEffect, useState } from "react";

import styled from "styled-components";
import instance from "../../axios";
import {
  SearchedMovieResultTypes,
  SearchedMoviesTypes,
} from "../../types/searchedMovieTypes";
import SearchMovieCard from "./SearchMovieCard";
import TrailerModal from "../trailerModal";

const StyledMovies = styled.div`
  padding-top: 6rem;
  min-height: 100vh;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 3rem;
  padding-left: 7%;
  margin-bottom: 2rem;
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

interface Props {
  search: string;
}

const Search: React.FC<Props> = ({ search }) => {
  const [searchedMovies, setSearchedMovies] = useState<SearchedMoviesTypes>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(520763);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = (id: number) => {
    setId(id);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    setIsLoading(true);
    instance
      .get(
        `/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${search}`
      )
      .then((res) => {
        setIsLoading(false);
        setSearchedMovies(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [search]);

  return (
    <StyledMovies>
      <StyledTitle>Results</StyledTitle>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading ? (
          <img
            style={{ width: "20rem" }}
            alt="loading"
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"
          />
        ) : (
          <StyledCards>
            {searchedMovies !== undefined &&
              searchedMovies.results.map((movie: SearchedMovieResultTypes) => (
                <SearchMovieCard
                  openModal={() => openModal(movie.id)}
                  movie={movie}
                />
              ))}
          </StyledCards>
        )}
      </div>

      <TrailerModal id={id} isOpenModal={isOpenModal} closeModal={closeModal} />
    </StyledMovies>
  );
};

export default Search;
