export default {
  input: "index.js",
  output: {
    file: "./build/bundle.js",
    format: "iife",
    name: "build",
  },
  watch: {
    exclude: ["node_modules/**"],
  },
};
