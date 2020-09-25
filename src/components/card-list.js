import { makeStyles } from "@material-ui/core"
import React from "react"
import BlogCard from "./blog-card"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#000",
    fontSize: "2.6rem",
    fontWeight: "800",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const CardList = ({ listTitle, articles, location }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{listTitle}</h1>
      <div className={classes.cardsContainer}>
        {articles ? (
          articles.map(({ node }) => (
            <BlogCard key={node.id} article={node} location={location} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default CardList
