import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

const BlogCard = ({ article }) => {
  console.log("[BlogCard]");
  console.log(article);
  return (
    <Link to={{ pathname: `blog/${article.id}` }}>
      <div className="card" style={{ width: "20rem", border: "none" }}>
        <Image
          cloudName="zottik"
          publicId={"small_" + article.cover_uri.provider_metadata.public_id}
        ></Image>
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
