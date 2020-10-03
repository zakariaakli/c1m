// next.config.js

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap')
    }

    return config
  }
});
