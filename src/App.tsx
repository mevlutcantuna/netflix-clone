import React, { useEffect } from "react";

import AuthPage from "./components/auth";
import SearchPage from "./components/search";
import MainPage from "./components/main";

import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
    <>
      <Route exact path="/" component={AuthPage} />
      <Route exact path="/browser" component={MainPage} />
      <Route exact path="/search" component={SearchPage} />
    </>
  );
};
export default App;
