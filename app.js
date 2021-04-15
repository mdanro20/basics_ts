"use strict";
console.log('Init page');
// If you want to execute:
// -- just one page then put the command: tsc page.ts
// -- just one page but changing changes automatically: tsc page.ts -w
// -- execute this command to create a json that permit you execute all the project and not only a page: tsc --init 
// -- execute this command to compile all ts files: tsc -w
function adition(number1, number2) {
    var result = number1 + number2;
    console.log(result);
    return result;
}
adition(6, 4);
//# sourceMappingURL=app.js.map