module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const enhancedItem = Object.assign({}, item)
  enhancedItem.enhancement += 1
  return enhancedItem
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairedItem = Object.assign({},item);
  repairedItem.durability = 100;
  return repairedItem;
}


function get(item) {
  return { ...item };
}
