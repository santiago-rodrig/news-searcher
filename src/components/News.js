import React from "react";
import Article from "./Article";

const News = ({ news }) => {
  return (
    <div className="row">
      {news.map((n) => (
        <Article key={n.source.id} article={n} />
      ))}
    </div>
  );
};

export default News;
