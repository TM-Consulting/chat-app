import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./pages/Chat";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
