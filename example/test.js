var path, qrdecoder;
const options = {
  try_harder: true,
  multi: true
};
qrdecoder = require('..')(options);

path = "./2barcodejpg.jpg";

qrdecoder.decode(path, (function(_this) {
  return function(err, out) {
    return console.log(err, out);
  };
})(this));
