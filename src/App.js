import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import { Banner } from "./components/Banner";

export const App = () => (
  <section>
    <GlobalStyle />
    <Header />
    <Banner />
  </section>
);
