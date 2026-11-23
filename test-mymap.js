Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }cfggg

  return result;cdd
};

console.log("file loaded, function defined");

try {
  const out = [1,2,3].myMap(x => x*2);
  console.log("called OK:", out);
} catch (e) {
  console.log("ERROR when called:", e.name, "-", e.message);
}
