import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()} – Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
      <a href="https://www.tinacms.org">Tina</a> <span>by </span>
      <a href="https://www.forestry.io">Forestry.io</a>
    </footer>
  )
}

export default Footer
