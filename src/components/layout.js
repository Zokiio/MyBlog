/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline, Fade } from "@material-ui/core"
import Navbar from "./navbar"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    color: "#fff",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar siteTitle={data.site.siteMetadata?.title || "Zottik"} />
      <Fade in mountOnEnter unmountOnExit>
        <main>{children}</main>
      </Fade>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
