const student = [
    {id:23, name:"sakib"},
    {id:22, name:"nakib"},
    {id:53, name:"rakib"},
    {id:27, name:"akib"}
];
const findStudent = [];
const stNames = student.map(s => s.name);
const stIds = student.map(s => s.id);
const akib = student.find(s => s.id == 27);
const result = findStudent.push(akib);
console.log(result)
console.log(akib)
console.log(stNames);
console.log(stIds);
