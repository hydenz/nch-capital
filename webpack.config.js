const path = require('path');

module.exports = {
  entry: [
    './carousel.js',
    './data.js',
    './locale.js',
    './chart1.js',
    './chart2.js',
    './chart3.js',
    './chart4.js',
    './chart5.js',
  ],
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
