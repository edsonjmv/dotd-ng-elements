const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/dog-of-the-day/runtime-es2015.js',
    './dist/dog-of-the-day/polyfills-es2015.js',
    './dist/dog-of-the-day/scripts.js',
    './dist/dog-of-the-day/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/dotd-element.js');
})();