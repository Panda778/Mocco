import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./App.css";

import Overview from "./pages/Overviwe";
import User from "./pages/User";
import { store } from "./redux/store";

function App() {
  return (
    <Router>
      <ReduxProvider store={store}>
        <Switch>
          <Route exact path={"/"}>
            <Overview />
          </Route>
          <Route exact path={"/user"}>
            <User />
          </Route>
        </Switch>
      </ReduxProvider>
    </Router>
  );
}

export default App;
