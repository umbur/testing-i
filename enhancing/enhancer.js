module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
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
