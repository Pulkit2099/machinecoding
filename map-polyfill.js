Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
}

let arr=[2,4,6,8,10]
let c=arr.myMap((res)=>res*2)
console.log(c)