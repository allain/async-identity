var test = require('tape');

var id = require('..');

test('works in simple case', function(t) {
  id(10, function(err, value) {
    t.error(err);
    t.equal(value, 10);
    t.end();
  });
});

test('works when value is undefined', function(t) {
  id(undefined, function(err, value) {
    t.error(err);
    t.equal(value, undefined);
    t.end();
  });
});

