import React from "react";
import ARTICLE_QUERY from "../apollo/queries/article";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const Article = () => {
  let { articleId } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={articleId}>
      {({ data: { article } }) => {
        console.log(article);
        const imageUrl = process.env.API_URI;

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
