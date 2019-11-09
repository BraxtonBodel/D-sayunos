import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle } from "./GlobalStyle";


export const App = () => (
  <section>
    <GlobalStyle />
    <Header />
    <Card />
  </section>
);
