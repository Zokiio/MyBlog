import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query articles {
    articles {
      id
      title
      preview
      displayimage {
        url
      }
      published_at
    }
  }
`;

export default ARTICLE_QUERY;
