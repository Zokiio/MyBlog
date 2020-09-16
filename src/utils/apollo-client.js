import { HttpLink } from "apollo-link-http";
import { CachePersistor } from "apollo-cache-persist";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_HOST = process.env.API_URL || "http://localhost:1337";
const SCHEMA_VERSION = "1";
const SCHEMA_VERSION_KEY = "apollo-schema-version";

const getApolloClient = async () => {
  const httpLink = new HttpLink({ uri: API_HOST + "/graphql" });
  const cache = new InMemoryCache();

  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage,
  });

  const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY);

  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore();
  } else {
    await persistor.purge();
    window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
  }

  return new ApolloClient({ link: httpLink, cache });
};

export default getApolloClient;
