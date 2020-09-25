import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  link: {
    color: "#000",
    "&&:hover": {
      textDecoration: "none",
    },
  },
}))

export default function BlogCard({ article, location }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Link className={classes.link} to={(location || "") + article.slug}>
        {/* Image */}
        <CardMedia>
          <Img fixed={article.image.childImageSharp.fixed} />
        </CardMedia>
        {/* Title & Date   */}
        <CardHeader title={article.title} subheader={article.published_at} />
        {/* Preview */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.preview}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}
