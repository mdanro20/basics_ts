console.log('Init page');
// If you want to execute:
// -- just one page then put the command: tsc page.ts
// -- just one page but changing changes automatically: tsc page.ts -w
// -- execute this command to create a json that permit you execute all the project and not only a page: tsc --init 
// -- execute this command to compile all ts files: tsc -w

function adition (number1: number, number2: number): number{
    let result = number1 + number2;
    console.log(result);
    return result;
}

adition(6,4);


// Basics Types

let number: number;
let text: string;
let flag: boolean;
let messages: any;
let messages2: unknown;

let arrayOne: string[] = ['Daniel', 'Robles'];
let arrayTwo: Array<string> = ['Daniel', 'Robles'];
let arrayThree: [number, string] = [23, 'Daniel'];

let signName: 'ADSIB' | 'DIGICERT';
let objectOne: object = {
    'name': 'Daniel',
    'age': 23
}

let objectTwo: {name: string; age: number} = {
    name: 'Daniel',
    age: 23
}

