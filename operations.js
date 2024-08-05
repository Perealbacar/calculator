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
    
    SetOperatedValues();
    return totalNum;
}

function SetOperatedValues(){

    operator = undefined;
    lastNum = undefined;
    operated = true;
}

function ResetValues(){

    operator = undefined;
    lastNum = undefined;
    operated = false;
    totalNum = 0;
    display.textContent = 0;

}
function WriteNumbers(text){
    display.textContent += text
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

    let text = e.target.textContent;

    //ifIsNumber do this:

    
    
    lastNum = display.textContent.split('').filter((char) => numbers.includes(char)).join('');
    console.log("totalNum: " + totalNum + "operator:" + operator + "lastNum:" + lastNum + "equals")
    
    if(lastNum === ""){
        return ChangeDisplay(0);
    }    

    display.textContent = Operate(totalNum, operator, lastNum);
    e.stopPropagation()

})

const ac = document.querySelector(".AC")

ac.addEventListener("click", e =>{
    e.stopPropagation();
    ResetValues();
})


calculator.addEventListener("click", e =>{
    
    let text = e.target.textContent;

    if (isNumerical(text)){

        if(display.textContent == 0 || operated){
            display.textContent = text;
            operated = false;
        }

        else if(display.textContent != 0){
            display.textContent += text;
        }        
    }
    
    if(IsOperator(text)){
        totalNum = display.textContent;
        display.textContent = text;
    }

})

function isNumerical(text){
    
    return numbers.includes(text)
}

function isOperator(text){
    return operators.includes(text)
}
    









