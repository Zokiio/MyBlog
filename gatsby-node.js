/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)

  const getArticles = await makeRequest(
    graphql,
    `
    query loadPagesQuery  {
      allStrapiArticles {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(result.data.allStrapiArticles.edges)
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(edge => {
      createPage({
        path: `blog/${edge.node.slug}`,
        component: articleTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getArticles
}
