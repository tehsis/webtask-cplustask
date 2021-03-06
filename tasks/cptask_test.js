var fs = require('fs');
var cp = require('child_process');
var crypto = require('crypto');

var input = '/tmp/' + crypto.randomBytes(5).toString('hex') + '.cpp';
var output = '/tmp/' + crypto.randomBytes(5).toString('hex') + '.out';

return function(context, cb) {
  fs.open(input, 'w', function(err, fd) {
    fs.write(fd, context.body, 'utf-8', function(err) {
      if (err) return cb(err);
      cp.exec('g++ ' + input + ' -o ' + output , function(err) {
        if (err) return cb(err);
        cp.exec(output, function(err, out) {
          cb(err, out);
        });
      });
    });
  });
}
