import React, { useState } from "react";
import { ApolloProvider, gql } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Article from "./pages/article";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const App = () => {
  const [client, setClient] = useState(
    new ApolloClient({
      uri: process.env.API_URI + "/graphql",
      cache: new InMemoryCache(),
    })
  );
  const [loading, setLoading] = useState(true);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
