// module.exports = {
//   source: ["tokens/**/*.json"],
//   platforms: {
//     scss: {
//       transformGroup: "scss",
//       prefix: "sd",
//       buildPath: "build-tokens/scss/",
//       files: [{
//         destination: "_variables.scss",
//         format: "scss/variables"
//       }],
//     },
//   }
// };
// const StyleDictionary = require('style-dictionary');
//
// const StyleDictionaryConfig = {
//   source: [`tokens/**/*.json`],
//   platforms: {
//     scss: {
//       transformGroup: 'scss',
//       buildPath: 'build-tokens/scss/',
//       files: [{
//         destination: 'tokens.scss',
//         format: 'scss/variables',
//       }],
//     },
//   },
// };
//
// const StyleDictionaryProcessor = StyleDictionary.extend(StyleDictionaryConfig);
// StyleDictionaryProcessor.buildPlatform('scss');



const StyleDictionary = require('style-dictionary');

const config = {
  source: [`tokens/**/*.json`],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build-tokens/scss/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables',
      }],
    },
  },
};

const SD = StyleDictionary.extend(config);
SD.buildPlatform('scss');

