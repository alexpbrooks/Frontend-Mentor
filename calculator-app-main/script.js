function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}

function changeTheme() {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'theme-1') { setTheme('theme-2'); document.querySelector('.dot').style.marginLeft = '28px'; }
    if (currentTheme === 'theme-2') { setTheme('theme-3'); document.querySelector('.dot').style.marginLeft = '50px'; }
    if (currentTheme === 'theme-3') { setTheme('theme-1'); document.querySelector('.dot').style.marginLeft = '5px'; }
}

if (localStorage.getItem('theme') === null || document.documentElement.className === '') {
    setTheme('theme-1');
}

document.querySelector('.pos').addEventListener('click', () => changeTheme())
document.querySelector('#one').addEventListener('click', () => { setTheme('theme-1'); document.querySelector('.dot').style.marginLeft = '5px'; })
document.querySelector('#two').addEventListener('click', () => { setTheme('theme-2'); document.querySelector('.dot').style.marginLeft = '28px'; })
document.querySelector('#three').addEventListener('click', () => { setTheme('theme-3'); document.querySelector('.dot').style.marginLeft = '50px'; })

document.querySelector('#equals').addEventListener('click', () => calculateSum())
document.querySelector('#del').addEventListener('click', () => clearNumber())
document.querySelector('#reset').addEventListener('click', () => resetCalculator())
document.querySelector('#dot').addEventListener('click', () => addDecimal())


let numberString = ''
let calculatorList = []

function addNumber(number) {
    updateCalculator(calculatorList)
    numberString = numberString+number
    document.querySelector('.output').textContent=numberString
}

function checkNumberIsFloat(number) {
    if (typeof number === 'number' && Number.isNaN(number) === false && Number.isInteger(number) === false) {
        return true
    }
    return false
}

function addOperator(operator) {
    if (numberString !== '') {
        calculatorList.push(parseInt(numberString))
        updateCalculator(calculatorList)
        numberString = ''
    }
    if (typeof(calculatorList[(calculatorList.length-1)]) === 'number') {
        calculatorList.push(operator)
        updateCalculator(calculatorList)
    }
}

function calculateSum() {
    if (numberString !== '') {
        calculatorList.push(parseInt(numberString))
        numberString = ''
    }
    if (typeof(calculatorList[(calculatorList.length-1)]) === 'number') {
        updateCalculator(calculatorList)
        document.querySelector('.output').textContent=document.querySelector('.output').textContent+'='
        calculate(calculatorList)
    }
}

let num1;
let num2;
let oper;

function calculate(calculatorList) {
    calculatorList.forEach(element => {
        if (typeof(element) === 'number') {
            if (num1 === undefined) { num1 = element; }
            else { num2 = element }
        }
        if (typeof(element) !== 'number') {
            oper = element
        }
        if (num2 === 0 && oper === 'div') {
            document.querySelector('.output').textContent='Cannot divide by zero.';
            document.querySelector('.output').style.fontSize='smaller';
            return
        }
        if (num1 !== undefined && num2 !== undefined && oper !==undefined) {
            num1 = operate(num1,oper,num2)
            num2 = undefined;
            oper = undefined;
            numStr = '';
            document.querySelector('.output').textContent=num1
        }    
    }
    );
    num1 = undefined;
    num2 = undefined;
    oper = undefined;
}

function operate(number1,operator,number2) {
    if (operator === 'add') {return number1+number2}
    if (operator === 'sub') {return number1-number2}
    if (operator === 'mul') {return number1*number2}
    if (operator === 'div') {return number1/number2}
}

function clearNumber() {
    numberString = ''
    document.querySelector('.output').textContent=''
}

function addDecimal() {
    if (numberString === '') {numberString = '0'}
    numberString = numberString+'.'
    document.querySelector('.output').textContent=numberString
}

function updateCalculator(calculatorList) {
    calculatorText = '';
    calculatorList.forEach(element => {
        if (checkNumberIsFloat(element) === true || Number.isInteger(element) === true) { calculatorText = calculatorText+element; }
        operators.forEach(operator => {
            if (element === operator.name) {calculatorText=calculatorText+operator.symbol}
        })
    })
    document.querySelector('.output').textContent=calculatorText;
}

function resetCalculator() {
    calculatorList = []
    clearNumber();
}



for (let number=0; 10>number; number++) {
    document.getElementById(number).addEventListener('click', () => addNumber(number) )
}

operators = [
    {name: 'add', symbol: '+', key: '+'},
    {name: 'sub', symbol: '-', key: '-'},
    {name: 'div', symbol: '÷', key: '/'},
    {name: 'mul', symbol: '×', key: '*'}  
]
operators.forEach(operator => {
    document.getElementById(operator.name).addEventListener('click', () => addOperator(operator.name))
})