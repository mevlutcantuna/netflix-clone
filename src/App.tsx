import React, { useEffect } from "react";

import Auth from "./pages/Auth";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import styled from "styled-components";

const MainStyled = styled.div`
  background: black;
`;

const App: React.FC = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user !== null) {
      history.push("/browser");
    } else {
      history.push("/");
    }
  }, [history, user]);

  return (
    <MainStyled>
      <Route exact path="/" component={Auth} />
      <Route exact path="/browser" component={Home} />
      <Route exact path="/search" component={Search} />
    </MainStyled>
  );
};
export default App;
