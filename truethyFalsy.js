//false value :
//false
// 0
//""
//undefined
//null
//NaN

//truthy value :
// "0"
//" "
//{}
//[]
const age = 4

if(age > 0){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

const age1 = 4

if(age1){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const age2 = 0;

if(age2){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const name = "soliman"

if(name){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const name1 = "soliman"

if(name1.length){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const name2 = "soliman"
if(name2.length > 0){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const name3 = ""
if(name3){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

const name4 = " "
if(name4.length > 0){
    console.log("condition is true");
}else{
    console.log("condition is false");
};


let name5;
if(name5){
    console.log("condition is true");
}else{
    console.log("condition is false");
};


let name6 = null;
if(name6){
    console.log("condition is true");
}else{
    console.log("condition is false");
};

let name7=NaN;
if(name7){
    console.log("condition is true");
}else{
    console.log("condition is false");
}