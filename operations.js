let totalNum = 0;

function add(lastNum){
    return totalNum + lastNum
}

function subtract(lastNum){
    return totalNum - lastNum
}

function multiply(lastNum){
    return totalNum * lastNum
}

function divide(lastNum){
    return totalNum / lastNum
}

function operate(firstNum, operator, lastNum){
    switch (operator){
        case "+":
            totalNum = firstNum.add(lastNum);
            break;
        case "-": 
            totalNum = firstNum.subtract(lastNum);
            break;
        case "*": 
            totalNum = firstNum.subtract(lastNum);
            break;
        case "/":
            totalNum = firstNum.subtract(lastNum);
            break;
        case "":
            totalNum = 0;
            break;        
    }

    return totalNum;
}