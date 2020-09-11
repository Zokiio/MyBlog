import React from "react";

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

      <section className="paral text-dark">
        <p>Latest Posts</p>
        <div
          class="d-flex flex-wrap align-content-middle justify-content-around"
          style={{ height: "600px" }}
        >
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
          <div class="col-md-4 col-sm-6 border">Latest blogposts here</div>
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
