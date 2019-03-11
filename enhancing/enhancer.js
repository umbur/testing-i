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
  const failedItem = Object.assign({}, item)
  if (failedItem.enhancement >= 0 && failedItem.enhancement <= 14) {
    failedItem.durability -= 5;
  }
  else if (failedItem.enhancement > 14 && failedItem.enhancement <= 16) {
    failedItem.durability -= 10;
} else if (failedItem.enhancement > 16) {
    failedItem.enhancement -= 1; 
    failedItem.durability -= 10;
}
  else {
    ("Item did not satisfy any conditions")
}
return failedItem
}

function repair(item) {
  const repairedItem = Object.assign({},item);
  repairedItem.durability = 100;
  return repairedItem;
}


function get(item) {
  return { ...item };
}
