document.addEventListener('click', () => { ResetButton(); Calc()  })

document.querySelector('#resetBtn').addEventListener('click', () => { ResetForm() })

function ErrorCheck() {
    let billAmount = document.querySelector('#billamount')
    if (billAmount.value <= 0) {
        billAmount.className = 'redBorder'
    }
    else {
        billAmount.className = 'noBorder'
    }
    let peopleAmount = document.querySelector('#peopleamount')
    if (peopleAmount.value <= 0 ) {
        document.querySelector('.errormessage').style.display = 'contents';
        peopleAmount.className = 'redBorder'
    }
    else {
        document.querySelector('.errormessage').style.display = 'none';
        peopleAmount.className = 'noBorder'
    }
}

function Calc() {
    let billAmount = document.querySelector('#billamount').value
    let peopleAmount = document.querySelector('#peopleamount').value
    ErrorCheck()
    if (billAmount == 0 || peopleAmount == 0) {
        return
    }
    let buttons = document.querySelector('.buttons')
    let customTipAmount = buttons.querySelector('#tipamount').value
    let buttonTipAmount = buttons.querySelector('.selected').value
    let tipAmount
    if (customTipAmount != '') {
        ResetAllButtons()
        tipAmount = customTipAmount*0.01
    }
    else {
        tipAmount = buttonTipAmount
    }
    let inputTipPerPerson = document.querySelector('#tipPerPerson')
    let inputTotalPerPerson = document.querySelector('#totalPerPerson')
    let outputTipPerPerson = ((billAmount * (1+tipAmount))-billAmount)/peopleAmount
    let outputTotalPerPerson = (billAmount * (1+tipAmount))/peopleAmount
    inputTipPerPerson.textContent = outputTipPerPerson.toPrecision(3)
    inputTotalPerPerson.textContent = outputTotalPerPerson.toPrecision(3)
}

function ResetButton() {
    if (document.querySelector('#peopleamount').value == '' && document.querySelector('#billamount').value == '') {
        document.querySelector('#resetBtn').className = 'inactiveBtn'
    }
    else {
        document.querySelector('#resetBtn').className = 'activeBtn'
    }
}

function ResetForm() {
    document.querySelector('#peopleamount').value = ''
    document.querySelector('#billamount').value = ''  
    document.querySelector('#tipamount').value = ''
    document.querySelector('#tipPerPerson').innerHTML = ''
    document.querySelector('#totalPerPerson').innerHTML = ''
}



let buttonsAll = document.querySelector('.buttons')
let buttons = buttonsAll.querySelectorAll('button')

function ResetAllButtons() {    
    buttons.forEach( (button) => { button.className = 'unselected' } )
}

buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            document.querySelector('#tipamount').value = ''
            ResetAllButtons()
            button.className = 'selected'
        })
    }
)

function CustomAmount() {
    if (document.querySelector('#tipamount') != '') {
        document.querySelector('#tipamount').className= 'greenBorder'
        ResetAllButtons()
    }
}
