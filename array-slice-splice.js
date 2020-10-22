const num = [1,2,3,4,5,6,7,8];

const part = num.slice(3,6);
console.log(part);
console.log(num);
const remove = num.splice(3,2,44,23,56,78);
console.log(remove);
console.log(num);

const together = num.join(",");
console.log(together)

