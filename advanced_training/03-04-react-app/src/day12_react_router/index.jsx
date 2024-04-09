import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function Day12() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">todos</Link>
            </li>
          </ul>
        </nav>
        {/* /todos */}
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Home";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return <h2>Home</h2>;
}

function About() {
  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       console.log("you stayed here for 3s");
  //     }, 3000);

  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, []);

  return <h2>About</h2>;
}
