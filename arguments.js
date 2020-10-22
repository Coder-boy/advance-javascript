function add(num1 , num2) {
    console.log([...arguments])
   return num1 + num2 + arguments[2] + arguments[3]
  

}
const result = add(2,4,6,8)
console.log(result);