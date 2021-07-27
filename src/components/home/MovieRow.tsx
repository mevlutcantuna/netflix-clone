import React, { useEffect, useState } from "react";

import instance from "../../axios";
import { MovieTypes } from "../../types/movieTypes";
import { MovieResult } from "../../types/movieTypes";
import styled from "styled-components";
import TrailerModal from "../trailerModal";

interface Props {
  title: string;
  fetchUrl: string;
}

const StyledMain = styled.div``;

const StyledTitle = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 1rem;
  color: white;
`;

const StyledMovies = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 15rem;
  height: 9rem;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: transform 450ms;
  cursor: pointer;
  :hover {
    transform: scale(1.3);
  }
`;

const baseURL = "https://image.tmdb.org/t/p/original/";

const MovieRow: React.FC<Props> = ({ title, fetchUrl }) => {
  const [data, setData] = useState<MovieTypes>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(520763);

  const openModal = (id: number) => {
    setId(id);
    setIsOpenModal(true);
  };

  const closeModal = () => setIsOpenModal(false);

  useEffect(() => {
    instance
      .get(fetchUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  return (
    <StyledMain>
      <StyledTitle>{title}</StyledTitle>
      <StyledMovies>
        {data?.results.map((item: MovieResult) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "12rem",
              padding: "0 0.5rem",
            }}
          >
            <StyledImage
              onClick={() => openModal(item.id)}
              alt={item.name}
              src={baseURL + item.poster_path}
            />
          </div>
        ))}
      </StyledMovies>
      <TrailerModal id={id} isOpenModal={isOpenModal} closeModal={closeModal} />
    </StyledMain>
  );
};

export default MovieRow;
