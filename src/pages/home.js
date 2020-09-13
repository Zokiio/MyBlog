import React from "react";
import BlogCard from "../components/blog-card";

const Home = () => {
  const cards = [1, 2, 3];
  return (
    <main className="text-light">
      {/*Welcome */}
      <section className="paral paralsec1-image">
        <h1>Zottik</h1>
        <p>
          A personal little space by Joakim Hall and just another blog. Writing
          about my travles and techtips
        </p>
      </section>
      {/*Latest Blog posts */}

      <section className="paral text-dark">
        <h2>Latest Posts</h2>
        <div className="d-flex flex-wrap align-content-middle align-items-center justify-content-around">
          {cards.map((index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </section>

      {/*About me */}
      <section className="paral paralsec2-image">
        <h1>Zottik ✌</h1>
        <p>Something to say here!</p>
      </section>

      <section className="paral">
        <p>Test</p>
      </section>

      {/*Social Media */}
      <section className="paral paralsec3-image">
        <h1>Zottik ✌</h1>
      </section>
    </main>
  );
};

export default Home;
