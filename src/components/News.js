import React from "react";
import Article from "./Article";
import PropTypes from "prop-types";

const News = ({ news }) => {
  return (
    <div className="row">
      {news.map((n) => (
        <Article key={n.url} article={n} />
      ))}
    </div>
  );
};

News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
