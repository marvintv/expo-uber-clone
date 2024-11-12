// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);


// Export with NativeWind configuration
module.exports = withNativeWind(config, { input: "./global.css" });