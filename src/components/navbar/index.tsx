import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import NetflixLogo from "../../assets/Netflix_2015_logo.svg";
import Ring from "../../assets/notifications_white_24dp.svg";
import SearchIcon from "../../assets/search_white_24dp.svg";
import Modal from "./Modal";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  padding-left: 4rem;
  padding-right: 4rem;
  z-index: 20;
`;

const StyledLeftSide = styled.div`
  display: flex;
  img {
    width: 6rem;
    margin-right: 4rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  color: white;

  li {
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const StyledRightSide = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h3 {
    color: white;
    margin-right: 0.5rem;
    font-weight: normal;
  }
`;

const StyledInput = styled.div`
  width: 15rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  border: white 1px solid;
  background-color: black;
  height: 2.25rem;

  input {
    width: 100%;
    height: 100%;
    background-color: black;
    border: none;
    color: white;
  }

  img {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

const StyledProfile = styled.img`
  width: 2rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  const [profile, setProfile] = useState<string>("");
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getProfilePhoto = () => {
    let localProfile = localStorage.getItem("user");
    if (localProfile !== null) {
      let parsedProfileImg = JSON.parse(localProfile)?.photoUrl;
      setProfile(parsedProfileImg);
    }
  };

  const changeSearch = () => {
    setIsOpenSearch((prevState) => !prevState);
  };

  const focusSearch = () => {
    if (inputRef.current !== null && isOpenSearch) {
      inputRef.current.focus();
    }
  };

  const changeModal = (situation: boolean) => {
    setIsModalOpen(situation);
  };

  console.log(isModalOpen);

  useEffect(() => {
    getProfilePhoto();
    focusSearch();
  }, [focusSearch]);

  return (
    <StyledNavbar>
      <StyledLeftSide>
        <img alt="netflix" src={NetflixLogo} />
        <StyledList>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
        </StyledList>
      </StyledLeftSide>
      <StyledRightSide>
        {isOpenSearch ? (
          <StyledInput>
            <img alt="search" src={SearchIcon} />
            <input
              onBlur={() => setIsOpenSearch(false)}
              ref={inputRef}
              placeholder="Content,Person,Type"
            />
          </StyledInput>
        ) : (
          <img
            onClick={changeSearch}
            style={{ marginRight: "0.5rem", cursor: "pointer" }}
            alt="search"
            src={SearchIcon}
          />
        )}
        <h3>KIDS</h3>
        <img alt="ring" src={Ring} />
        <StyledProfile
          onMouseOver={() => changeModal(true)}
          alt="profile"
          src={profile}
        />
        {isModalOpen && <Modal changeModal={changeModal} />}
      </StyledRightSide>
    </StyledNavbar>
  );
};

export default Navbar;