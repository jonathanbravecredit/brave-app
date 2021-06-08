const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	webpackFinal: async (config, { configType }) => {
    const shouldAnalyze = process.env.analyze === "true";
        if (shouldAnalyze) {
            config.plugins.push(
                new BundleAnalyzerPlugin()
            );
        }

        config.optimization = {
            splitChunks: {
                chunks: "all",
                minSize: 30 * 1024, // 30KB
                maxSize: 1024 * 1024, // 1MB
            }
        };

        return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
