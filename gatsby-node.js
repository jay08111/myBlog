const path = require("path");
const dirname = __dirname;
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    reslove: {
      alias: {
        "@": path.resolve(dirname, "src"),
      },
    },
  });
};
