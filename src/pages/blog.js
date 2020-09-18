import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Article from "./article";

const Blog = () => {
  const cards = [1, 2, 3, 4, 5];
  let { path, url } = useRouteMatch();

  return (
    <main className="container test-dark">
      <Switch>
        <Route exact path={path}>
          <h3>All articles will be listed here later</h3>
        </Route>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
      </Switch>
    </main>
  );
};

export default Blog;
