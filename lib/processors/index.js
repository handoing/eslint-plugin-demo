const babelCore = require("@babel/core");
const { SourceMapConsumer } = require('source-map');
const ConstantFolding = require('babel-plugin-minify-constant-folding');

module.exports = function() {
  let rawSourceMap = new Map();
  return {
    ".js": {
      preprocess: function(text, filename) {
        const result = babelCore.transform(text, {
          plugins: [ ConstantFolding ],
          sourceMaps: true,
          filename,
        });
        rawSourceMap.set(filename, result.map);
        return [result.code];
      },
      postprocess: function(messages, filename) {
        const consumer = new SourceMapConsumer(rawSourceMap.get(filename));
        const newMessages = messages.map((list) => {
          return list.map((item) => {
            const { line, column } = item;
            const originPos = consumer.originalPositionFor({ line, column });
            return {
              ...item,
              ...originPos
            }
          })
        })
        return [].concat(...newMessages);
      }
    }
  };
}