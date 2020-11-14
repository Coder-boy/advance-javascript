var promise = "I Will Work Hard To Become A Programmer";
console.log(promise.toLocaleLowerCase());//sob lekha k lower case korar jonno

var promise1 = "I Will Work Hard To Become A Programmer";
console.log(promise1.toLocaleUpperCase());//sob lekha k upper case korar jonno

var promise2 = "I promise I Will Work Hard To Become A Programmer";
console.log(promise2.indexOf('Work'))//kuno word er position jante hole
// kuno string er vitore kuno ekta word na thakle tar man hobe -1

var promise3 = "I promise I Will Work Hard To Become A Programmer";
console.log(promise3.split(' '))// word vag korte hole

var num1 = 65
var num2 = "15.5";
num2 = parseFloat(num2)// kuno string k number banate bebohar hoy
console.log(num1 + num2)

var num1 = 65
var num2 = "15.5";
num2 = +num2// kuno string k number banate bebohar hoy
console.log(num1 + num2)

var num3 = 65
var num4 = 10.5;
num2 = parseInt(num3)// kuno number er kuchra ongsho k purno snkhay rupantor korte 
console.log(num1 + num2)

var num5 = 65
var num6 = 10.5;
num2 = ""+num5// kuno number k string e rupantor korte 
console.log(typeof num5)


var num7 = 0.1
var num8 = 0.2;
var total = num7 + num8;
total = total.toFixed(1)// decimal number k jog korte 
console.log(total)


var number1 = -5;
var absoluteNumber = Math.abs(number1);//number posetive or negative hok shudhu number ta dekha be
console.log(absoluteNumber);

var number2 = 5.9;
var result = Math.ceil(number2);//number ta jodi .5 ba er upore hole 1 dekha be
console.log(result);

var number3 = 5.3;
var result1 = Math.floor(number3);//number ta jodi .1 ba er upore hole 0 dekha be
console.log(result1);

var number1 = .4;
var result = Math.round(number1);//number ta jodi .5 ba er upore hole 1 & .5 er niche hole 0 dekha be
console.log(result);

var friendAge =[22,34,53,23,21];
var position = friendAge.indexOf(34);// array er position janar jonno

console.log(position)

num = 100;//taratari kuno akta value check korte switch bebohar hoy
switch (num) {
    case 1000:
        console.log("i am 1000")        
        break;

        case 100:
        console.log("i am 100")        
        break;

    default:
        console.log("i don't who are you? ")
        break;

}