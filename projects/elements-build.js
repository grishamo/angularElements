const fs = require('fs-extra');
const concat = require('concat');
const distFolder = __dirname + '/../dist/';
const outputFolder = __dirname + '/elements-test/';

(async function build() {
  const files = [
    distFolder + '/elements/runtime.js',
    distFolder + '/elements/polyfills.js',
    distFolder + '/elements/scripts.js',
    distFolder + '/elements/main.js'
  ];

  await fs.ensureDir(outputFolder);
  await concat(files, outputFolder + 'elements.js');
//   await fs.copyFile(
//     './dist/momentum-element/styles.css',
//     'elements/styles.css'
//   );
})();