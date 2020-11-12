import React from "react";
import PropTypes from "prop-types";

const Article = ({ article }) => {
  const {
    urlToImage,
    url,
    title,
    content,
    source: { name: sourceName },
  } = article;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          {urlToImage ? <img src={urlToImage} alt={title} /> : null}
          <span className="card-title">{sourceName}</span>
        </div>
        <div className="card-content">
          <h3 style={{ overflow: "auto" }}>{title}</h3>
          <p>{content}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
