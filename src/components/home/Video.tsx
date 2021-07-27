import React, { useEffect, useState } from "react";

import { MovieResult } from "../../types/movieTypes";
import instance from "../../axios";
import requests from "../../requests";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  padding-left: 4rem;
  padding-bottom: 1rem;
  font-size: 4rem;
  font-weight: 800;
`;

const StyledButtonsDiv = styled.div`
  padding-left: 4rem;
  padding-bottom: 3rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  font-weight: 700;
  border-radius: 0.5rem;
  margin-right: 1rem;
  padding: 1.25rem 2.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  :hover {
    color: black;
    background-color: white;
    transition: all 0.5s;
  }
`;

const StyledDesc = styled.div`
  color: white;
  padding-left: 4rem;
  width: 50rem;
  line-height: 1.3;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  height: 80px;
`;

const StyledBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 8rem;
  font-size: 4rem;
  color: white;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

const StyledMain = styled.div`
  position: relative;
  width: 100%;
  height: 38rem;
  //background-image: url();
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Video: React.FC = () => {
  const [video, setVideo] = useState<MovieResult>();
  const imageUrl = "https://image.tmdb.org/t/p/original" + video?.backdrop_path;

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const styledNavbarBackground = {
    backgroundImage: "url(" + imageUrl + ")",
  };

  useEffect(() => {
    instance
      .get(requests.fetchNetflixOriginals)
      .then((res) =>
        setVideo(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        )
      )
      .catch((err) => console.log(err));
  }, []);

  // @ts-ignore
  return (
    <StyledMain style={styledNavbarBackground}>
      <StyledTitle>{video?.original_name}</StyledTitle>
      <StyledButtonsDiv>
        <StyledButton>Play</StyledButton>
        <StyledButton>My List</StyledButton>
      </StyledButtonsDiv>
      <StyledDesc>
        {video?.overview !== undefined && truncate(video?.overview, 150)}
      </StyledDesc>
      <StyledBottom />
    </StyledMain>
  );
};

export default Video;
