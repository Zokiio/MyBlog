import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import dayjs from "dayjs"
import { CardMedia, makeStyles } from "@material-ui/core"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles(theme => ({
  root: {
    color: "#000",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "80px 2px 80px 2px",
    [theme.breakpoints.up("sm")]: {
      margin: "80px auto",
    },
    maxWidth: "800px",
  },
  ReactMD: {
    maxWidth: "400px",
  },
}))

const ArticleTemplate = ({ data }) => {
  console.log(data)
  const classes = useStyles()
  const article = data.strapiArticles
  const disqusShortName = "zottik"
  const disqusConfig = {
    identifier: article.id,
    title: article.title,
  }

  const imageRender = img => {
    console.log(img)
    return <img {...img} className={classes.ReactMD} />
  }

  return (
    <Layout>
      <SEO title={article.title} />
      <div className={classes.root}>
        <h1>{article.title}</h1>
        <span className="date">
          <i className="fas fa-calendar-alt"></i>{" "}
          {dayjs(article.published_at).format("YYYY-MM-DD")}
        </span>
        <CardMedia>
          <Img fixed={article.image.childImageSharp.fixed} />
        </CardMedia>
        <ReactMarkdown
          source={article.content}
          className="reactMD"
          renderers={{ image: imageRender }}
        />
        <div>
          <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
        </div>
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const query = data => {
  console.log("[TEST]")
  console.log(data)
  return graphql`
    query ArticleTemplate($slug: String) {
      strapiArticles(slug: { eq: $slug }) {
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
}
