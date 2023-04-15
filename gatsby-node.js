const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  console.log("Page - " + page.page);
  if (page.path.match(/^\/wip/)) {
    createPage({
      path: "/project",
      matchPath: "/project/:name",
      component: path.resolve("src/components/project.tsx"),
    });
  }
};

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /(gsap|framer-motion|react-use)/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
