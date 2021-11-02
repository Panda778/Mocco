import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';


import Overview from "./pages/Overviwe";
import User from "./pages/User";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Overview/>
          </Route>
          <Route exact path={'/user'}>
            <User/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
