import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createStructuredSelector } from "reselect";

import Chat from "../../pages/Chat";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { makeSelectCurrentPage } from "./selectors";

const appState = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
});
function App() {
  const { currentPage } = useSelector(appState);

  const history = useHistory();
  useEffect(() => {
    history.push(currentPage);
  }, [currentPage]);

  return (
    <>
      <ToastContainer theme="colored" />
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
    </>
  );
}

export default App;
