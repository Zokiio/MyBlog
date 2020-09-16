import React from "react";
import BlogCard from "../components/blog-card";

const Blog = () => {
  const cards = [1, 2, 3, 4, 5];

  return (
    <main className="container test-dark">
      <p>Kommer stuff här sen</p>
      <div className="row">
        {/*Blog Posts*/}
        <section className="col-md-9 border d-flex flex-wrap justify-content-between">
          {cards.map((index) => (
            <BlogCard key={index} />
          ))}
        </section>

        {/*Navigate? Posts*/}
        <div className="col-md-3 border">menu</div>
      </div>
    </main>
  );
};

export default Blog;
