// toggleState false = monthly
// toggleState true = yearly
let toggleState = false;
let toggleDiv = document.querySelector('.toggle');
let toggleWhi = toggleDiv.querySelector('#white');
let toggleBtn = toggleDiv.querySelector('#purple');
let toggleY = toggleDiv.querySelector('#year');
let toggleM = toggleDiv.querySelector('#month');
toggleBtn.addEventListener('click', () => {changeState('switch')});
toggleY.addEventListener('click', function() {changeState(true)});
toggleM.addEventListener('click', function() {changeState(false)});
let cards = document.querySelector('.cards');
let cardBas = cards.querySelector('#basic');
let cardPro = cards.querySelector('#professional');
let cardMas = cards.querySelector('#master')
let btnBas = cardBas.querySelector('button')
let btnPro = cardPro.querySelector('button')
let btnMas = cardMas.querySelector('button')
btnBas.addEventListener('click', () => {location.href='#basic'})
btnPro.addEventListener('click', () => {location.href='#professional'})
btnMas.addEventListener('click', () => {location.href='#master';})

toggleDiv.addEventListener('mouseenter', () => {document.body.style.backgroundColor = '#C5C7F4'})
toggleDiv.addEventListener('mouseleave', () => {document.body.style.backgroundColor = null})
btnBas.addEventListener('mouseenter', () => {document.body.style.backgroundColor = '#C5C7F4'})
btnBas.addEventListener('mouseleave', () => {document.body.style.backgroundColor = null})
btnPro.addEventListener('mouseenter', () => {document.body.style.backgroundColor = '#C5C7F4'})
btnPro.addEventListener('mouseleave', () => {document.body.style.backgroundColor = null})
btnMas.addEventListener('mouseenter', () => {document.body.style.backgroundColor = '#C5C7F4'})
btnMas.addEventListener('mouseleave', () => {document.body.style.backgroundColor = null})

function changeBackground() {
    let body = document.querySelector('body');
    
}

// changeBackground();

function changeState(state) {
    if (state == true) { toggleState = true; }
    else if (state == false) { toggleState = false; }
    else if (state == 'switch') {
        if (toggleState == false) { toggleState = true; }
        else if (toggleState == true) { toggleState = false;}
    }
    else { console.log('error') }
    updateState()
}

function updateState() {
    if (toggleState == true) { 
        toggleWhi.style.marginLeft = '4px';
        changePrices('annually')
    }
    else if (toggleState == false) {
        toggleWhi.removeAttribute('style');
        changePrices('monthly')
    }
}

function changePrices(state) {
    let amntBas = cardBas.querySelector('.amount')
    let amntPro = cardPro.querySelector('.amount')
    let amntMas = cardMas.querySelector('.amount')
    if (state == 'annually') {
        amntBas.textContent = '199.99';
        amntPro.textContent = '249.99';
        amntMas.textContent = '399.99';
    }
    else if (state == 'monthly') {
        amntBas.textContent = '19.99';
        amntPro.textContent = '24.99';
        amntMas.textContent = '39.99'; 
    }
}
