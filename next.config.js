const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve(__dirname));
    return config;
  },

  trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/projects/:cid': { page: '/projects/[cid]' },
        '/projects/:cid/:id': { page: '/projects/[cid]/[id]' }
      }
    }
};
