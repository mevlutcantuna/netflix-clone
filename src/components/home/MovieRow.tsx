import React, { useEffect, useState } from "react";
import instance from "../../axios";
import { MovieTypes } from "../../types/movieTypes";
import { MovieResult } from "../../types/movieTypes";
import styled from "styled-components";

interface Props {
  title: string;
  request: string;
  largeRow?: boolean;
}

const StyledMain = styled.div``;

const StyledTitle = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
`;

const StyledMovies = styled.div`
  overflow-x: auto;
  display: flex;
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 8rem;
  padding: 20px;
`;

const baseURL = "https://image.tmdb.org/t/p/original/";

const MovieRow: React.FC<Props> = ({ title, request }) => {
  const [data, setData] = useState<MovieTypes>();
  console.log(data);
  useEffect(() => {
    instance
      .get(request)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledMain>
      <StyledTitle>{title}</StyledTitle>
      <StyledMovies>
        {data?.results.map((item: MovieResult) => (
          <div key={item.id}>
            <StyledImage alt={item.name} src={baseURL + item.poster_path} />
          </div>
        ))}
      </StyledMovies>
    </StyledMain>
  );
};

export default MovieRow;
