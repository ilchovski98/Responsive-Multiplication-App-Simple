const submitBtn = document.querySelector('#submitBtn');
const activateBtn = document.querySelector('#activator');
const ulCalc = document.querySelector('#calculations');

let a;
let b;
let discription;
let checker = 0;

function numberGenerator() {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    discription = `${a} x ${b} = `;
}

let listening;

function activateHandler() {
    if (checker > 0) {
        return;
    }
    numberGenerator();
    const newLi = document.createElement('li');
    newLi.innerHTML = ` 
    <div class='new-example'>
        <div class='center'>
            <p>${discription}</p> <input id='inputs'>
            <button class='submit' id='submitBtn'>Submit</button><p class='result-box non-visible' id='result'></p>  
        </div>
    </div>`;
    ulCalc.appendChild(newLi);
    checker++;
    listening = ulCalc.lastElementChild.querySelector('button');
    listening.addEventListener('click', submitHandler);
}

function submitHandler() {
    const x = a * b;
    const inputField = ulCalc.lastElementChild.querySelector('#inputs');
    const resultOutput = ulCalc.lastElementChild.querySelector('#result');
    const typedResult = parseInt(inputField.value);
    const name = ulCalc.lastElementChild.querySelector('.new-example');

    if (x === typedResult) {
        resultOutput.textContent = x;
        name.classList.remove('wrong');
        name.classList.toggle('right');

        /* resultOutput.classList.toggle('non-visible'); */
    } else if (x !== typedResult) {
        name.classList.remove('right');
        name.classList.add('wrong');
        console.log('scream')
        return;
    } 

    numberGenerator();
    const newLi = document.createElement('li');
    newLi.innerHTML = ` 
    <div class='new-example'>
        <div class='center'>
            <p>${discription}</p> <input id='inputs'>
            <button class='submit' id='submitBtn'>Submit</button><p class='result-box non-visible' id='result'></p>  
        </div>
    </div>`;
    ulCalc.appendChild(newLi);
    listening.removeEventListener('click', submitHandler); 
    listening = ulCalc.lastElementChild.querySelector('#submitBtn');
    listening.addEventListener('click', submitHandler);

}

function compoundCalc() {
    const everyMonth = 1000;
    const riseEveryMonth = 1.01;
    const periodInMonths = 120;
    let account = 0;
    let account2 = 0;

    for (i=0; i<periodInMonths; i++) {
        account = (account + everyMonth) * riseEveryMonth;
        account2 = account2 + everyMonth;
        console.log(account, i, account2);
    }
}

compoundCalc();

activateBtn.addEventListener('click', activateHandler);