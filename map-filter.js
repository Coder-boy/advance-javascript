const num = [6 , 7, 8, 9,3,];

for(let i = 0; i < num.length; i++){
   const element = num[i];
   const square = element * element
   console.log(square);
}

num.map(function (element, index, array) {
    console.log(element * element)
    console.log(element, index,array)
});

const result =num.map(x => x * x);
console.log(result)

const num1 = [2,4,5,6,9,90,56]
const bigger = num1.filter(x => x > 5);
console.log(bigger);


const isThere = num1.find(x => x > 5)
console.log(isThere)