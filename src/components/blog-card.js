import React from "react";
import daegu from "../assets/img/daegu.jpg";

const BlogCard = () => {
  return (
    <div className="card" style={{ width: "20rem", border: "none" }}>
      <img
        src={daegu}
        className="card-img-top"
        style={{ borderRadius: "5px", boxShadow: "black" }}
        alt="#"
      />
      <div className="card-body">
        <p className="tags">Korea</p>
        <h5 className="card-title">On my way to Korea</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
