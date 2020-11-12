import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const API_KEY = "061378f4e76d415aace426ea1e4f7c78";

function App() {
  const [query, setQuery] = useState({ category: "general" });
  const [news, setNews] = useState([]);
  useEffect(() => {
    const queryAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=ve&category=${query.category}&apiKey=${API_KEY}`;
      const response = await fetch(URL);
      const payload = await response.json();
      setNews(payload.articles);
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
