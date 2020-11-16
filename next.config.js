module.exports = {
  env: {
    debugMode: true,
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = {
      '/': { page: '/' },
      '/github': { page: '/github' },
    };
    return paths;
  },
};
