
var recipies = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipies2 = Object.assign({}, object, {key: value});
  return recipies2;
}