import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Collapse, IconButton, makeStyles } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import CardList from "../components/card-list"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundImage: `url(https://res.cloudinary.com/zottik/image/upload/b_rgb:0c4351,o_48/v1600667398/daegu_above_a05e43b9bf.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    textShadow: "1px 1px 10px #000",
  },
  titleColor: {
    color: "#26c7f0",
  },
  goDown: {
    color: "#FFF",
    fontSize: "4rem",
  },
}))

const IndexPage = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false)
  const classes = useStyles()
  useEffect(() => {
    setCollapsed(true)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Collapse in={collapsed} {...(true ? { timeout: 1000 } : {})}>
          <h1 className={classes.title}>
            <span className={classes.titleColor}>Hey!</span> I am Joakim.
          </h1>
          <IconButton>
            <ExpandMore className={classes.goDown} />
          </IconButton>
        </Collapse>
      </div>
      <CardList
        location="blog/"
        listTitle="Senaste inlägg"
        articles={data.allStrapiArticles.edges}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
