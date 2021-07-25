import React, { useEffect, useState } from "react";

import styled from "styled-components";
import firebase from "../../firebase";
import Logout from "../../assets/logout_white_24dp.svg";
import { useHistory } from "react-router-dom";

const StyledModal = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 10rem;
  height: 5rem;
  background-color: black;
  color: white;
  border-radius: 0.25rem;
  border: 1px white solid;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      margin-right: 1rem;
    }
  }
`;

interface Props {
  changeModal: (situation: boolean) => void;
}

const Modal: React.FC<Props> = ({ changeModal }) => {
  const [profile, setProfile] = useState<string>("");
  const history = useHistory();

  const getProfileName = () => {
    let localProfile = localStorage.getItem("user");
    if (localProfile !== null) {
      let parsedProfileName = JSON.parse(localProfile)?.name;
      setProfile(parsedProfileName);
    }
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem("user");
        history.push("/");
      });
  };

  useEffect(() => {
    getProfileName();
  }, []);
  return (
    <StyledModal
      onMouseOver={() => changeModal(true)}
      onMouseLeave={() => changeModal(false)}
    >
      <div>{profile}</div>
      <div onClick={logout}>
        <img src={Logout} alt="logout" />
        <span>Logout</span>
      </div>
    </StyledModal>
  );
};

export default Modal;
