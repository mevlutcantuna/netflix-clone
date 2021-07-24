import React, { useState } from "react";

import styled from "styled-components";
import firebase from "../../firebase";

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

const SignUp: React.FC<Props> = ({ changeHaveAccount }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUp = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullName.trim() && email.trim() && password.trim() !== "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user?.updateProfile({
            displayName: fullName,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          });
          changeHaveAccount();
        })
        .catch((err) => alert(err));
    } else {
      alert("Please Fill All Inputs Correctly");
    }
  };

  return (
    <StyledMain>
      <StyledTitle>Sign Up</StyledTitle>
      <form onSubmit={signUp}>
        <StyledInput
          value={fullName}
          onChange={handleChangeFullName}
          type="text"
          placeholder="Full Name"
        />
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
        <StyledButton>Sign Up</StyledButton>
      </form>
      <StyledLink>
        Do you have a account ? <span onClick={changeHaveAccount}>Sign In</span>
      </StyledLink>
    </StyledMain>
  );
};

export default SignUp;
