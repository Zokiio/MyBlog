import { gql } from "@apollo/client";

const ARTICLE_QUERY = gql`
  query article($id: ID!) {
    article(id: $id) {
      id
      title
      content
      cover_uri {
        url
      }
      published_at
    }
  }
`;

export default ARTICLE_QUERY;