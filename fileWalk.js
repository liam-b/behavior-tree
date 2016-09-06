var fs = require('fs');

let walkPath = './js/other/behaviour/modules';

var output = []

const walk = (dir, done) => {
  fs.readdir(dir, (error, list) => {
    if (error) {
      return done(error);
    }

    let i = 0;

    (function next() {
      let file = list[i++];

      if (!file) {
        return done(null);
      }

      file = `${dir}/${file}`;

      fs.stat(file, (error, stat) => {

        if (stat && stat.isDirectory()) {
          walk(file, error => {
            next();
          });
        } else {
          // do stuff to file here
          console.log(file);
          output.push(file)


          next();
        }
      });
    })();
  });
};

// optional command line params
//      source for walk path
process.argv.forEach((val, index, array) => {
  if (val.includes('source')) {
    walkPath = val.split('=')[1];
  }
});

console.log('-------------------------------------------------------------');
console.log('processing...');
console.log('-------------------------------------------------------------');

walk(walkPath, error => {
  if (error) {
    throw error;
  } else {
    console.log('-------------------------------------------------------------');
    console.log('finished.');
    console.log('-------------------------------------------------------------');
  }
});

console.log(output)
