module.exports = {
  distDir: "build",
  experimental: { esmExternals: false },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
