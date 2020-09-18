import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ article }) => {
  return (
    <Link to={{ pathname: `blog/${article.id}` }}>
      <div className="card" style={{ width: "20rem", border: "none" }}>
        <img
          src={process.env.API_URL + article.displayimage.url}
          className="card-img-top"
          style={{ borderRadius: "5px", boxShadow: "black" }}
          alt="#"
        />
        <div className="card-body">
          <p className="tags">{article.published_at}</p>
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.preview}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
