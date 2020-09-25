import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardList from "../components/card-list"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <CardList listTitle="Alla inlägg" articles={data.allStrapiArticles.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          slug
          preview
          image {
            childImageSharp {
              fixed {
                height
                width
                src
                srcSet
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`
