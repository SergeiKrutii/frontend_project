import Container from "./components/common/container/Container";
import Header from "components/common/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default App;
