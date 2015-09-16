module.exports = function(val, cb) {
  process.nextTick(function() {
    cb(null, val);
  });
};
