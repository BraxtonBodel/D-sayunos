import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./GlobalStyle";
import styled  from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0
`;

export const App = () => (
  <Container>
    <section>
    <GlobalStyle />
    <Header />
    <Card />
  </section>
  </Container>
  
);
