const normalPerson = {
    firstName : "rahim",
    lastName : "uddin",
    salary:15000,
    getFullName : function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function (amount , tips , tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
    
}

console.log(normalPerson);
console.log(normalPerson.firstName);
normalPerson.chargeBill(1000);
console.log(normalPerson.salary);


const heroPerson = {
    firstName: "hero",
    lastName: "alom",
    salary: 25000
}
// borrow a method from another object
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(5000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyPerson = {
    firstName: "rayhan",
    lastName: "uddin",
    salary: 50000
}
//direct call another object from amnother objecj
normalPerson.chargeBill.call(friendlyPerson , 5000, 500, 50);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

const otherPerson = {
    firstName: "shofi",
    lastName: "uddin",
    salary: 70000
}
normalPerson.chargeBill.apply(otherPerson ,[7000, 700, 70])
console.log(otherPerson.salary)