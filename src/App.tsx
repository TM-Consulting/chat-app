import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
