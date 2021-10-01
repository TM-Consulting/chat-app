import { ReactChild, ReactNode, useEffect } from "react";
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
import ErrorBoundary from "../../components/ErrorBoundary";
const appState = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
});
const App = () => {
  return (
    <>
      <ToastContainer theme="colored" />

      <Router>
        <Home>
          <div>
            <Switch>
              <Route exact path="/sign-in">
                <ErrorBoundary key={"test"}>
                  <SignIn />
                </ErrorBoundary>
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
            </Switch>
          </div>
        </Home>
      </Router>
    </>
  );
};

export default App;

const Home = ({ children }: any) => {
  const { currentPage } = useSelector(appState);

  const history = useHistory();
  useEffect(() => {
    console.log("current page", currentPage);
    history.push(currentPage);
  }, [currentPage, history]);

  return <>{children}</>;
};
