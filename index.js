var loader = require.resolve("./index.loader.js")
module.exports = function(items) {
  var itemsArray = Array.prototype.slice.call(arguments)
      .map((item) => {
        return item.reduce((sum, current, index, arr) => {
          var delimiter = (index !== arr.length - 1) ? '!' : '';
          var options = (current.options && typeof current.options === 'object')
                        ? '?' + JSON.stringify(current.options)
                        : '';
          return sum + current.loader + options + delimiter;
        }, '');
  });

  return loader + "?" + JSON.stringify(itemsArray).replace(/!/g, "\\u0021");
};
