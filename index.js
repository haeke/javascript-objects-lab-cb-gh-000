
var recipes = {
  food: 'ham',
};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes2 = Object.assign({}, object, { key: value });
  return recipes2;
}
