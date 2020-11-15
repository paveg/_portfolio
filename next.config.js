module.exports = {
  env: {},
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      '/': { page: '/' },
      '/github': { page: '/' },
    };
    return paths;
  },
};
