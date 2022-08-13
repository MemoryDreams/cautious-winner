const operandi = document.getElementById('operandi');
const sum = document.getElementById('sum');
let bottomText = '0';
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = 'none';
let pointSet = false;

function inputNumber(num) {
    if ((parseInt(bottomText) === 0) && (!pointSet)) {
        bottomText = ' ' + num;
    } else {
        bottomText = bottomText + num;
        console.log(bottomText);
    }
    operandi.textContent = bottomText;
}

function setOperator(tool) {
    if ((result === Infinity) && (parseInt(bottomText) === 0)) {
        sum.textContent = "You can't operate on Infinity.";
        return;
    }
    if (bottomText !== '0') {
        num1 = num2;
        if (pointSet) {
            num2 = parseFloat(bottomText);
        } else {
            num2 = parseInt(bottomText);            
        }
        pointSet = false; 
        console.log(num2);
        bottomText = '0';
        if (operator === 'none') {
            result = num2;
        } else {   
            switch(operator) {
                case '+':
                    result = getSum();
                    break;
                case '-':
                    result = getDifference();
                    break;
                case '*':
                    result = getMultiplied();
                    break;
                case '/':
                    result = getDevided();
                    break;
            }  
        }
        num2 = result;
        sum.textContent = result + ' ' + tool;
        operator = tool;
        operandi.textContent = '0';
    } else {
        sum.textContent = num2 + ' ' + tool;
        operator = tool;
    }
}

function equal() { 
    if (bottomText !== '0') {
        num1 = num2;
        if (pointSet) {
            num2 = parseFloat(bottomText);
        } else {
            num2 = parseInt(bottomText);            
        }
        bottomText = '0';
        pointSet = false;  
        switch(operator) {
            case '+':
                result = getSum();
                break;
            case '-':
                result = getDifference();
                break;
            case '*':
                result = getMultiplied();
                break;
            case '/':
                result = getDevided();
                break;
            default:
                result = num2;
        }  
        sum.textContent = result;
        operandi.textContent = '0';
        num1 = 0;
        num2 = result;
        operator = 'none';
    } else {
        sum.textContent = result;
    }
}

function getSum() {
    return num1 + num2;
}

function getDifference() {
    return num1 - num2;
}

function getMultiplied() {
    return num1 * num2;
}

function getDevided() {
    return num1 / num2;
}

function reset() {
    sum.textContent = '0';
    operandi.textContent = '0';
    bottomText = '0';
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = 'none';
    pointSet = false;
}

function swap() {
    if (bottomText !== '0') {
        if (bottomText[0] == '-') {
            bottomText = bottomText.slice(1);
        } else {
            bottomText = '-' + bottomText;
        }
        operandi.textContent = bottomText;
    }
}

function setPoint() {
    if ((!pointSet)) {
        pointSet = true;
        bottomText = bottomText + '.';
        operandi.textContent = bottomText;
    } 
}

function setPercent() {
    if ((num2 !== 0) && (bottomText !== '0') && (operator !== 'none')) {
        let one = num2 / 100;
        console.log(num2 + ' ' + one);
        if (pointSet) {
            bottomText = one * parseFloat(bottomText);
        } else {
            bottomText = one * parseInt(bottomText);            
        }
        operandi.textContent = bottomText;
        equal();
    } 
}