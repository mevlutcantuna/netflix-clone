import { render } from "react-dom";
import App from "./App";

import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);
