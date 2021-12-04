import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RelayEnvironmentProvider } from "react-relay";
import { createRelayEnvironment } from "./RelayEnvironment";

const SWAPI_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

const relayEnvironment = createRelayEnvironment({
  url: SWAPI_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
