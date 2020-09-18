import React from "react";
import ARTICLE_QUERY from "../apollo/queries/article";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const Article = (id) => {
  let { articleId } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={articleId}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? process.env.API_URI + article.cover_uri.url
            : process.env.API_URI + article.cover_uri.url;
        return (
          <div>
            <div>
              <img src={imageUrl} style={{ width: "600px" }} />
              <h1>{article.title}</h1>
            </div>

            <div>
              <div>
                <ReactMarkdown source={article.content} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
