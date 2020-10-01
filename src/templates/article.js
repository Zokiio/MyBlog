import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import dayjs from "dayjs"
import { makeStyles } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles(theme => ({
  root: {
    color: "#000",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "80px 20% 80px 20%",
  },
  rootMin: {
    color: "#000",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "80px 2px 80px 2px",
  },
}))

const ArticleTemplate = ({ data }) => {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")
  const article = data.strapiArticles
  const disqusShortName = "zottik"
  const disqusConfig = {
    identifier: article.id,
    title: article.title,
  }

  return (
    <Layout>
      <SEO title={article.title} />
      <div className={matches ? classes.root : classes.rootMin}>
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
