import React, { useState } from "react";

import styled from "styled-components";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const StyledMain = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: black;
  opacity: 0.8;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 3rem;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2.75rem;
  font-size: 1.25rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background-color: #e8f0fe;
  opacity: 1;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-top: 2rem;
  background-color: #e50914;
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
`;

const StyledLink = styled.div`
  color: #797979;
  margin-top: 1rem;
  span {
    color: white;
    cursor: pointer;
  }
`;

interface Props {
  changeHaveAccount: () => void;
}

const SignIn: React.FC<Props> = ({ changeHaveAccount }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const createUserInLocalStorage = (
    name: string = "",
    email: string = "",
    photoUrl: string = ""
  ) => {
    const user = JSON.stringify({
      name,
      email,
      photoUrl,
    });

    localStorage.setItem("userName", user);
  };

  const singIn = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && password.trim() !== "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          createUserInLocalStorage(
            res.user?.displayName?.toString(),
            res.user?.email?.toLowerCase(),
            res.user?.photoURL?.toString()
          );
          history.push("/browser");
        })
        .catch((err) => alert(err));
    } else {
      alert("Please Fill All Inputs Correctly");
    }
  };

  return (
    <StyledMain>
      <StyledTitle>Sign In</StyledTitle>
      <form onSubmit={singIn}>
        <StyledInput
          value={email}
          onChange={handleChangeEmail}
          type="email"
          placeholder="Email"
        />
        <StyledInput
          value={password}
          onChange={handleChangePassword}
          type="password"
          placeholder="Password"
        />
        <StyledButton>Sign In</StyledButton>
      </form>
      <StyledLink>
        Do you wanna join Netflix?{" "}
        <span onClick={changeHaveAccount}>Now Register</span>
      </StyledLink>
    </StyledMain>
  );
};

export default SignIn;
