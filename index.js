const name = 'Vasya';
if (typeof name == "string") {
    alert("hello, Vasya");
} else {
    alert('Ошибка, не тот тип данных')
}
const name = 123;
if (typeof name == "string") {
    alert("hello, Vasya");
} else {
    alert('Ошибка, не тот тип данных')
}


console.log(typeof 9); // number
console.log(typeof NaN); // number
console.log(typeof 'String'); // string
console.log(typeof true); // boolean
console.log(typeof {name: 'Sally'}); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefine