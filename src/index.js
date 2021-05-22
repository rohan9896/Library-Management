import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataContextProvider from "./Context/data-context";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/auth-context"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <ChakraProvider>
          <DataContextProvider>
            <App />
          </DataContextProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
