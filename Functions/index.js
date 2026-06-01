//Functions


function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(x){
    
    return x % 2 === 0 ? true : false;
}
function isValid(email){
    return email.includes("@") ? true : false;

}

console.log(isValid("luis@gmail.com"));