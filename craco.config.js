const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@helpers': path.resolve(__dirname, 'src/helper-functions/'),
      '@types': path.resolve(__dirname, 'src/types/'),
    },
  },
};
