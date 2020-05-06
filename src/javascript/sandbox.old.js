// alert("hello world");

// var test = "Hello World";
// console.log(test);

// const name = 'nicole';

// console.log(name == 'Nicole');

// const i = "20abc";

// if (!Number(i)) {
//     console.log('THis is not a number, we cannot convert it');
// } else {
//     console.log(`The number is ${Number(i)}`);
// }

// // this is a function expression
// const fnText = () => {
//     const fn1 = () => {
//         console.log(`This is my variable ${name}`)
//     }

//     // this is a function declaration
//     function fn2() {
//         console.log(`This is my variable from fn2 ${name}`)
//     }

//     class MyName {
//         constructor(){
//             name: ''
//         }
//     }

//     fn1();
//     fn2();
// }

// fnText();
const sayIt = (greeting, name) => {
    return `${greeting}, ${name}!`
}

function speak(fn, obj) {
    let test = {
      myObj: obj,
      myFunc: fn(this.myObj)
    }
    
    console.log(`inside the speak function we have`);
    console.log(test.myObj);
    
    return test.myFunc;
}

const callSayIt = function() { return sayIt(this.greeting, this.name) };

//const test = speak(callSayIt,{greeting: 'Hello', name: 'Rebecca'});

// console.log(`calling the speak function returns`);
// console.log(test);

const people = ['Ted', 'Nicole', 'Josef', 'Jan', 'More People...'];
const ul = document.querySelector('.people');
let html = '';

people.forEach(person => html += `<li>${person}</li>`);

console.log(html);
ul.innerHTML = html;

const morePeople = people;
people.push('Ted');
console.log(morePeople);

let testNumber = 3;
let newTestNumber = testNumber;
testNumber = 10;
console.log(`The new Test number is ${newTestNumber}`);

const para = document.querySelector(".error");
console.log(para.getAttribute('data-colindex'));
para.setAttribute('data-colindex', '2');
console.log(para.getAttribute('data-colindex'));