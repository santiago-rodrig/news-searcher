import React from "react";
import Article from "./Article";

const News = ({ news }) => {
  return (
    <div className="row">
      {news.map((n) => (
        <Article key={n.url} article={n} />
      ))}
    </div>
  );
};

export default News;
