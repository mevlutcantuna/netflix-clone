import React, { useEffect } from "react";

import Auth from "./pages/Auth";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

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
      <Route exact path="/" component={Auth} />
      <Route exact path="/browser" component={Home} />
      <Route exact path="/search" component={Search} />
    </>
  );
};
export default App;
