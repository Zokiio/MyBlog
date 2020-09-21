import React from "react";
import ARTICLE_QUERY from "../apollo/queries/article";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Image, Placeholder } from "cloudinary-react";

const Article = () => {
  let { articleId } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={articleId}>
      {({ data: { article } }) => {
        console.log(article);

        return (
          <div>
            <div>
              <Image
                cloudName="zottik"
                publicId={
                  "large_" + article.cover_uri.provider_metadata.public_id
                }
              >
                <Placeholder />
              </Image>
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
