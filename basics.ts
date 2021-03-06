// Type Assigment and Type Inference

    // let object1: object = {
    //     name: "Daniel",
    //     age: 23
    // }

    let object2: {name: string; age: number;} = {
        name: "Daniel",
        age: 23
    }
    
    // console.log(object2.name);
    
    
    // Array 
    
    let firstArray: string[] = ["Daniel", " Robles"];
    let secondArray = [3, 2];
    // console.log(firstArray[0]);
    
    // Tuplas
    
    let role: [number, string] = [1, "Designer"];
    
    // Enum = Asigns a value (by default it is a number and it starts with 0) for the names or key
    
    enum Role {ADMIN, READ_ONLY, AUTHOR};
    enum Role2 {ADMIN = 5, READ_ONLY, AUTHOR};
    enum Role3 {ADMIN = 'ADMIN', READ_ONLY= 5, AUTHOR= 10};
    
    // Any
    
    let randomArray: any[] = ['Hola', 2, 'Daniel'];
    
    // Union 
    
    function combine(input1: number | string, input2: number | string){
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number') {
            result = input1 + input2;
        }else{
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    
    // console.log(combine('hola', 2));
    
    
    // Literal types
    
    function combine_two(input1: number | string, input2: number | string, order: 'as-number' | 'as-text'){
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || order == 'as-number') {
            result = +input1 + +input2;
        }else{
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    

    // Type Aliases
    
    type Combinable = number | string;
    type CombinableOrder = 'as-number' | 'as-text'
    
    function combine_three(input1: Combinable, input2: Combinable, order: CombinableOrder){
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || order == 'as-number') {
            result = +input1 + +input2;
        }else{
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    

    // Function type
    let combine_values: (a: number, b:number) => number; //Declaramos una variable de tipo funci??n con dos par??metros y
                                                            //retorna un n??mero.
    

    // Function type and callbacks
    
    function Adition(i1: number, i2: number, cbf: (result: number) => void){
        const response = i1 + i2;
        cbf(response);
    }
    
    Adition(5,7, (res) => {
        console.log(res);
    });

    
    // Unknown Type = Its usually used when you do not know what the type could be, but it is better than any because
    // it is more restricted because it converts to the type of the value you assign
    
    let message: unknown;
    let showNumber: string;
    message = 'Hola, me llamo Daniel';
    if (typeof message === 'string') {
        showNumber = message;
    }


    // Never type: Use for cases where the function never returns anything

    function generateError(message: string, code: number): never{
        throw {message: message, errorCode: code};
        // while (true) {
            
        // }
    }

    let result = generateError('No puede cargar esta p??gina', 501);
    console.log(result);