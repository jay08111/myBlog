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
