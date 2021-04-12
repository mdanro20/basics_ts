// Type Assigment and Type Inference
// let object1: object = {
//     name: "Daniel",
//     age: 23
// }
var object2 = {
    name: "Daniel",
    age: 23
};
console.log(object2.name);
// Array 
var firstArray = ["Daniel", " Robles"];
var secondArray = [3, 2];
console.log(firstArray[0]);
// Tuplas
var role = [1, "Designer"];
// Enum = Asigns a value (by default it is a number and it starts with 0) for the names or key
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 6] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 7] = "AUTHOR";
})(Role2 || (Role2 = {}));
;
var Role3;
(function (Role3) {
    Role3["ADMIN"] = "ADMIN";
    Role3[Role3["READ_ONLY"] = 5] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 10] = "AUTHOR";
})(Role3 || (Role3 = {}));
;
// Any
var randomArray = ['Hola', 2, 'Daniel'];
// Union 
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine('hola', 2));
