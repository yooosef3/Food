import "./styles/index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/cl83aq7zm0sj301t3fk18av4e/master",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
