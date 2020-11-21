const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

module.exports = withBundleAnalyzer({
  env: {
    SITE_URL: process.env.SITE_URL,
  },
});
