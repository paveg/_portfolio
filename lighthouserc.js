module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: '/index.html',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        canonical: 'off',
        'uses-http2': 'off',
      },
    },
  },
};