const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@helpers': path.resolve(__dirname, 'src/helper-functions/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@types': path.resolve(__dirname, 'src/types/'),
    },
  },
};
