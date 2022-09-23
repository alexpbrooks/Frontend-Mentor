function Calc() {
    let billAmount = document.querySelector('#billamount').value
    let peopleAmount = document.querySelector('#peopleamount').value
    if (billAmount == 0 || peopleAmount == 0) {
        return
    }
    let buttons = document.querySelector('.buttons')
    let tipAmount = buttons.querySelector('.selected').value
    let inputTipPerPerson = document.querySelector('#tipPerPerson')
    let inputTotalPerPerson = document.querySelector('#totalPerPerson')
    let outputTipPerPerson = ((billAmount * (1+tipAmount))-billAmount)/peopleAmount
    let outputTotalPerPerson = (billAmount * (1+tipAmount))/peopleAmount
    inputTipPerPerson.textContent = outputTipPerPerson
    inputTotalPerPerson.textContent = outputTotalPerPerson
}
document.querySelector('.input').addEventListener('click', () => { Calc() } )

function Reset() {
    document.querySelector('#peopleamount').value = '0'
    document.querySelector('#billamount').value = '0'  
    document.querySelector('#tipPerPerson').innerHTML = ''
    document.querySelector('#totalPerPerson').innerHTML = ''
}
document.querySelector('#resetBtn').addEventListener('click', () => { Reset() })

function Tip() {
    console.log('tip')
}
let buttonsAll = document.querySelector('.buttons')
buttons = buttonsAll.querySelectorAll('button')

console.log (buttons)
for (let button in buttons) {
    console.log(button.length)
    // buttonz.addEventListener('click', () => { Tip() })
}