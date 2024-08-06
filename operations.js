let totalNum = 0;


const operators = "+-*/%";

const numbers = "1234567890.";

let operator = undefined;
let lastNum = undefined;
let operated = false;


function Add(lastNum){
    return totalNum + lastNum;
}

function Subtract(lastNum){
    return totalNum - lastNum;
}

function Multiply(lastNum){
    return totalNum * lastNum;
}

function Divide(lastNum){
    return totalNum / lastNum;
}

function Percent(lastNum){
    return totalNum = (lastNum/100);
}

function Undo(){
    console.log("hola")
     if(display.textContent.length > 0){
        display.textContent = display.textContent.slice(0, -1);
     };
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
        case "%":
            totalNum = Percent(lastNum);
            break;       
        case "":
            totalNum = 0;
            break;
    }

    totalNum = totalNum.toFixed(3);
    
    SetOperatedValues();
    return totalNum;
}

function SetOperatedValues(){
    
    operator = undefined;
    lastNum = undefined;
    writtenFirstNum = false;
    writtenLastNum = false;
    operated = true;
}

function ResetValues(){

    operator = undefined;
    lastNum = undefined;
    operated = false;
    totalNum = 0;
    display.textContent = 0;
    writtenLastNum = false;

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

    FindLastNum();

    if(lastNum === ""){
        return ChangeDisplay(0);
    }

    display.textContent = Operate(totalNum, operator, lastNum);
    e.stopPropagation()

})

const c = document.querySelector(".Undo");

c.addEventListener("click", e=>{
    Undo()

    if(IsFirstNum()){
        totalNum = display.textContent;
    }
    if(IsLastNum()){
        lastNum = display.textContent;
    }
    

} );



function FindLastNum(){

    lastNum = display.textContent.split('').filter((char) => numbers.includes(char)).join('');
    console.log("totalNum: " + totalNum + "operator:" + operator + "lastNum:" + lastNum + "equals")   
      

}

const ac = document.querySelector(".AC")

ac.addEventListener("click", e =>{
    e.stopPropagation();
    ResetValues();
})

let writingFirst = false;
let writtenFirstNum = false;
let writtenLastNum = false;

calculator.addEventListener("click", e =>{
    e.stopPropagation();
    
    let text = e.target.textContent;

    if (IsNumerical(text)){
        if(IsFirstNum()){
            if(display.textContent == 0 || operated == true){
                operated = false;
                display.textContent = text;
                totalNum = display.textContent;
                operated = false;
                console.log("firstnum1")
                return
            }

            display.textContent += text;
            totalNum = display.textContent;
            console.log("firstnum2")
            return
        }
        
        else if(IsLastNum()){
            if(writtenLastNum){
                display.textContent += text;
                console.log("lastnum1")

            }
            else{
                writtenLastNum = true;
                display.textContent = text;
                console.log("lastnum2")
            }
            lastNum = display.textContent;            
        }
              
    }
    
    else if(IsOperator(text)){
        operated = false;
        
        if(writtenFirstNum == false){
            writtenFirstNum = true;
            operator = text;
            display.textContent = text;
            console.log("operator 1")
            return
        }
        else if(writtenFirstNum == true){
            if(IsOperator(display.textContent)){
                operator = text
                display.textContent = text;
                console.log("operator 2")
                return
            }
            else if(writtenLastNum){
                display.textContent = text;
                totalNum = Operate(totalNum, operator, lastNum)
                writtenFirstNum = true;
                operator = text;
                operated = false;
                display.textContent = totalNum;
                console.log("operator 3")
                return
            }
            else if(!writtenLastNum){
                operator = text;
                display.textContent = text;
                console.log("operator3-1")
            }
        }
        else if(writtenLastNum && writtenFirstNum){
            console.log("operator 4");
            Operate(totalNum,operator,lastNum);
            return

        }
    }

})

function IsFirstNum(){
    if( writtenFirstNum == false &&
        writtenLastNum == false){
        return true
    }
    else if(writtenFirstNum == true && operator == undefined && writtenLastNum == false && operated){
        writtenFirstNum == false;
        totalNum = 0;
        return true;
    }
    return false
}

function IsLastNum(){
    if(writtenFirstNum == true){
        return true
    }
    return false
}

function IsNumerical(text){

    return numbers.includes(text)
}

function IsOperator(text){
    return operators.includes(text)
}

    









