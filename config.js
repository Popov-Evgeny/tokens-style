const StyleDictionary = require('style-dictionary');
const {registerTransforms} = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary, {
  expand: {
    composition: true,
    typography: true,
    border: true,
    shadow: true
  },
  excludeParentKeys: false,
});

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "",
      buildPath: "build-tokens/scss/",
      files: [{
        destination: "_variables.scss",
        format: "scss/variables",
        options: {
          outputReferences: true,
        }
      }],
    },
  }
};

