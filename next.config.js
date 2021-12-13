module.exports = {
  i18n: {
    locales: ["en-US", "ko"],
    defaultLocale: "en-US",
  },
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
