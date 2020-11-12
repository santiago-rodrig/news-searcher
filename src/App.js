import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [query, setQuery] = useState({ category: "general" });
  useEffect(() => {
    const queryAPI = async () => {
      console.log("communicating with the API...");
    };

    queryAPI();
  }, [query]);
  return (
    <Fragment>
      <Header>Buscador de Noticias</Header>
      <div className="container white">
        <Form setQuery={setQuery} initialCategory={query.category} />
      </div>
    </Fragment>
  );
}

export default App;
