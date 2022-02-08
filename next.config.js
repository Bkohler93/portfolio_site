module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  target: "serverless",
  futer: {
    webpack5: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
};
