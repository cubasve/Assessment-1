/*-------CONSTANTS--------*/ 
let input = 1
let count = 0;

/*-------APP'S STATE (VARIABLES)--------*/ 

/*-------CACHED ELEMENT REFERENCES--------*/ 
let inputNumber = document.getElementById('inputNumber');
let countNumber = document.querySelector('h1 span');

/*-------EVENT LISTENERS--------*/ 
document.getElementById('add').addEventListener('click', renderAdd);
document.getElementById('subtract').addEventListener('click', renderSubtract);

/*-------FUNCTIONS--------*/ 

function renderAdd() {
    let inputValue = inputNumber.value;
    let number = parseInt(inputValue, 10);
    count += number;
    console.log(count);
    countNumber.innerHTML = count;
}

function renderSubtract() {
    let inputValue = inputNumber.value;
    let number = parseInt(inputValue, 10);
    count -= number;
    console.log(count);
    countNumber.innerHTML = count;
    
}

