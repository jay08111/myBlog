// Setup Import Alias
const path = require("path");
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();
  const output = config.output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@": path.resolve("src"),
        components: path.resolve(__dirname, "src/components"),
      },
    },
  });
};
