import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "use-http";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const ENV = process.env.NODE_ENV;
let host = "http://localhost:4000";

if (ENV !== "development") {
  host = "/";
}

ReactDOM.render(
  <Provider url={host}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
