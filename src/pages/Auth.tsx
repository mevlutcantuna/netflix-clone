import React, { useState } from "react";

import Image from "../assets/auth-bg.jpg";
import NetflixLogo from "../assets/Netflix_2015_logo.svg";
import styled from "styled-components";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  background-color: black;

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }
`;

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  height: 5rem;

  img {
    margin-top: 1rem;
    padding-left: 2rem;
    width: 14rem;
    height: 3rem;
    opacity: 1;
  }
`;

const Auth: React.FC = () => {
  const [haveAccount, setHaveAccount] = useState<boolean>(false);

  const changeHaveAccount = () => {
    setHaveAccount((prevState) => !prevState);
  };

  return (
    <StyledMain>
      <img
        alt="background"
        src={Image}
        srcSet={
          "https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/90a73f9b-82f9-4cf6-afd5-fc74a9f35a56/TR-tr-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        }
      />
      <StyledNavbar>
        <img alt="netflix" src={NetflixLogo} />
      </StyledNavbar>
      {haveAccount ? (
        <SignUp changeHaveAccount={changeHaveAccount} />
      ) : (
        <SignIn changeHaveAccount={changeHaveAccount} />
      )}
    </StyledMain>
  );
};

export default Auth;
