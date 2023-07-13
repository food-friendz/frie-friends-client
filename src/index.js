import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./utils/contex";

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql', // Replace with your GraphQL endpoint URL
  // uri: "https://foodie-friends-server-b0943e90cb47.herokuapp.com/", // Replace with your server's URL
  uri: (process.env.REACT_APP_API_URI ?? "http://localhost:3001/") + "graphql", // Replace with your server's URL
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppContextProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AppContextProvider>,
  document.getElementById("root")
);

reportWebVitals(console.log); // Optional: log performance results to the console
