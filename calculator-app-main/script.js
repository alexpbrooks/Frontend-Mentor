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
        numberString = ''
        console.log (calculatorList)
    }
    if (typeof(calculatorList[(calculatorList.length-1)]) === 'number') {
        calculatorList.push(operator)
        console.log(operator)
    }
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

function resetCalculator() {
    clearNumber();
    // toMath = []
}

function calculateSum() {
    console.log('calc')
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