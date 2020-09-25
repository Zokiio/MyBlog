import React from "react"
import { Link } from "gatsby-theme-material-ui"
import PropTypes from "prop-types"
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core"
import MenuOpen from "@material-ui/icons/MenuOpen"

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    textShadow: "1px 1px 3px #000",
  },
  appbarTitle: {
    color: "#fff",
    fontSize: "2rem",
    flexGrow: "1",
    "&& *": {
      color: "#fff",
    },
    fontFamily: "Ubuntu",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
}))

const Navbar = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Link to="/blog/">
          <IconButton>
            <MenuOpen className={classes.icon} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
