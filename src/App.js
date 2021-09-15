import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/user">
            <User/>
          </Route>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
