import React from "react";
import BlogCard from "../components/blog-card";
import Query from "../components/query";
import ARTICLE_QUERY from "../apollo/queries/articles";

const Home = () => {
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
      <section className="paral text-dark pb-5">
        <h2>Latest Posts</h2>
        <div className="d-flex flex-wrap align-content-middle  justify-content-around">
          <Query query={ARTICLE_QUERY}>
            {({ data: { articles } }) => {
              return articles
                .map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))
                .reverse();
            }}
          </Query>
        </div>
      </section>

      {/*About me */}
      <section className="paral paralsec2-image">
        <h1>Something</h1>
        <p>Fill with nsomethin about me</p>
      </section>
      <section className="paral text-dark">
        <p>Footer here I guess</p>
      </section>
    </main>
  );
};

export default Home;
