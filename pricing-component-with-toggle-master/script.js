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
    if (toggleState == false) { 
        console.log('monthly state')
        toggleWhi.style.marginLeft = '28px';
    }
    else if (toggleState == true) {
        toggleWhi.removeAttribute('style');
    }
}

function changePrices() {
    let cards = document.querySelector('.cards');
    let cardBas = cards.querySelector('#basic')
    let cardPro = cards.querySelector()
    let cardMas
}
