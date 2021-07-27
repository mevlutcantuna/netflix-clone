import React, { useEffect } from "react";

import Auth from "./pages/Auth";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Browser from "./pages/Browser";

const MainStyled = styled.div`
  background: black;
`;

const App: React.FC = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [history, user]);

  return (
    <MainStyled>
      <Route exact path="/" component={Auth} />
      <Route exact path="/browser" component={Browser} />
    </MainStyled>
  );
};
export default App;
