import { gql } from "@apollo/client";

const ARTICLES_QUERY = gql`
  query articles {
    articles {
      id
      title
      preview
      cover_uri {
        url
      }
      published_at
    }
  }
`;

export default ARTICLES_QUERY;
