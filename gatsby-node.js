exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulPage {
        nodes {
          contentful_id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error while loading pages", JSON.stringify(result.errors))
  }

  result.data.allContentfulPage.nodes.forEach(page => {
    actions.createPage({
      path: `/${page.slug}/`,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        slug: page.slug,
        contentfulId: page.contentful_id,
      },
    })
  })
  actions.createRedirect({
    fromPath: `/`,
    toPath: `/home`,
    redirectInBrowser: true,
    isPermanent: `true`,
  })
}
