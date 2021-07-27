import React from "react";
import { SearchedMovieResultTypes } from "../../types/searchedMovieTypes";
import styled from "styled-components";

const StyledCardMain = styled.div``;

const StyledCardImage = styled.img`
  width: 15rem;
  height: 9rem;
  object-fit: cover;
  border-radius: 1rem;
  transition: transform 450ms;
  cursor: pointer;
  padding: 0 0.5rem;
  margin: 1rem 1rem;

  :hover {
    transform: scale(1.3);
  }
`;

interface Props {
  movie: SearchedMovieResultTypes;
  openModal: (id: number) => void;
}

const baseURL = "https://image.tmdb.org/t/p/original/";

const SearchMovieCard: React.FC<Props> = ({ movie, openModal }) => {
  return (
    <StyledCardMain>
      <StyledCardImage
        onClick={() => openModal(movie.id)}
        src={baseURL + movie.poster_path}
      />
    </StyledCardMain>
  );
};

export default SearchMovieCard;
