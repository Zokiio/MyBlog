import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import PageRenderer from "./page-renderer";

const App = () => {
  const [client, setClient] = useState(
    new ApolloClient({
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache(),
    })
  );
  const [loading, setLoading] = useState(true);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" component={Home} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
