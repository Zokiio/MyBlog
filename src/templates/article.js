import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import dayjs from "dayjs"

const ArticleTemplate = ({ data }) => {
  const article = data.strapiArticles
  const disqusShortName = "zottik"
  const disqusConfig = {
    identifier: article.id,
    title: article.title,
  }

  return (
    <Layout>
      <SEO title={article.title} />
      <h1>{article.title}</h1>
      <span className="date">
        <i className="fas fa-calendar-alt"></i>{" "}
        {dayjs(article.published_at).format("YYYY-MM-DD")}
      </span>
      <Img fixed={article.image.childImageSharp.fixed} />
      <p>{article.content}</p>

      <div>
        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($eq: String) {
    strapiArticles(slug: { eq: $eq }) {
      id
      title
      content
      published_at
      image {
        childImageSharp {
          fixed(width: 200, height: 125) {
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
`
