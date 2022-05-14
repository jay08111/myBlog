// Setup Import Alias
const path = require("path");
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();
  const output = config.output || {};
  const dirName = __dirname;
  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(dirName, "src/components"),
        pages: path.resolve(dirName, "src/pages"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/blog-template.tsx"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
