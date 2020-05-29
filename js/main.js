console.log('Hello');
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


// function render(evt) {
//     if()
// }


// function render() {
//     renderAdd(100);
//     // renderSubtract(100);


//     // counterNumber = inputNumber +
//     // counterNumber.innerHTML = 
// }

// function renderAdd(x) {
//     value += x;
//     countNumber.textContent = value;
//     console.log(value);
// }
//store number in another variable

// function renderSubtract(x) {
//     value -= x;
//     countNumber.textContent = value;
//     console.log(value);
// }
//x = whatever we run through this function




// let sum = countValue.innerHTML;

// function renderAdd


// function renderAdd() {
//     countNumber.value.innerHTML += parseInt(countNumber.value) + parseInt(inputNumber.value);

    // countNumber.value.innerHTML = parseInt(countNumber.value) + parseInt(inputNumber.value);


    // let countValue.innerHTML = parseInt(countValue.value) + parseInt(inputValue.value);



    // countValue.innerHTML = countValue.value + inputValue.value;

    // countValue.innerHTML += inputValue.value;
// }

// inputNumber.value = parseInt(input.value) +1;


// function renderSubtract() {
//     countValue.value -= inputValue.value;
// }

