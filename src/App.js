import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => (
  <div>
    <GlobalStyle />
    <Header />
  </div>
);
