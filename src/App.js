import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header>Buscador de Noticias</Header>
      <div className="container white">
        <Form />
      </div>
    </>
  );
}

export default App;
