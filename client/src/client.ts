import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const storedData = localStorage.getItem("myApolloData");
if (storedData) {
  cache.restore(JSON.parse(storedData));
}

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URL}graphql`,
  cache,
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("myApolloData", JSON.stringify(cache.extract()));
});

export default client;
