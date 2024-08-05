let totalNum = 0;

const operators = "+-*/%";
const numbers = "1234567890";

let operator = undefined;
let lastNum = undefined;


function Add(lastNum){
    return totalNum + lastNum
}

function Subtract(lastNum){
    return totalNum - lastNum
}

function Multiply(lastNum){
    return totalNum * lastNum
}

function Divide(lastNum){
    return totalNum / lastNum
}

function Operate(firstNum, operator, lastNum){
    let result = 0;
    firstNum = parseFloat(firstNum);
    lastNum = parseFloat(lastNum);
    totalNum = parseFloat(totalNum);
    
    switch (operator){
        case "+":
            result = Add(lastNum);
            totalNum = result;            
            break;
        case "-": 
            totalNum = Subtract(lastNum);
            break;
        case "*": 
            totalNum = Multiply(lastNum);
            break;
        case "/":
            totalNum = Divide(lastNum);
            break;
        case "":
            totalNum = 0;
            break;        
    }
    ResetValues();
    return totalNum;
}



function ResetValues(){

    operator = undefined;
    lastNum = undefined;
}


const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const equal = document.querySelector(".equal");

function ChangeDisplay(text){
    display.textContent = text;
}

function IsOperator(text){

    let result = text.split('').filter((char) => operators.includes(char));

    console.log("result = " + result);

    let bool = result.length > 0;

    if(bool){
        operator = result[0];
    }

    console.log(bool);
    return bool;
    
}

equal.addEventListener("click", e => {

    lastNum = display.textContent.split('').filter((char) => numbers.includes(char)).join('');
    console.log("totalNum: " + totalNum + "operator:" + operator + "lastNum:" + lastNum + "equals")
    
    console.log(operator);
    console.log( operator === "+");
    console.log(totalNum);
    console.log(lastNum);

    display.textContent = Operate(totalNum, operator, lastNum);
    e.stopPropagation()

})


calculator.addEventListener("click", e =>{
    
    let text = e.target.textContent;
    if (totalNum === 0){
        
        display.textContent = text;
        totalNum = text;
        console.log("1")
    }

    else if(!IsOperator(text)){

        if(operator != undefined && lastNum != undefined){
            
            
            ChangeDisplay(text);
        }
        else{

            display.textContent += text;
        }
        
        console.log("2")
    }   
    
    else{
        ChangeDisplay(text);
        console.log("3")
    }
    
})
    









