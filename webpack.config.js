const path = require('path');

module.exports = {
  entry: [
    './src/carousel.js',
    './src/data.js',
    './src/locale.js',
    './src/chart1.js',
    './src/chart2.js',
    './src/chart3.js',
    './src/chart4.js',
    './src/chart5.js',
  ],
  output: {
    filename: 'index.prod.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
