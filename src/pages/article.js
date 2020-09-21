import React from "react";
import ARTICLE_QUERY from "../apollo/queries/article";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Image, Placeholder, Transformation } from "cloudinary-react";

const Article = () => {
  let { articleId } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={articleId}>
      {({ data: { article } }) => {
        console.log(article);

        return (
          <div>
            <div className="container">
              <Image
                dpr="auto"
                responsive
                width="auto"
                crop="scale"
                responsiveUseBreakpoints="true"
                cloudName="zottik"
                publicId={article.cover_uri.provider_metadata.public_id}
              >
                <Placeholder type="blur" />
                <Transformation fetchFormat="auto" crop="fill" />
                <Transformation radius="30" />
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
