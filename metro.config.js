// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add the polyfills
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  stream: require.resolve('stream-browserify'),
  'stream-browserify': require.resolve('stream-browserify'),
};

// Export with NativeWind configuration
module.exports = withNativeWind(config, { input: "./global.css" });