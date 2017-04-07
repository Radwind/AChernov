//1. "Hello world"
\u0063\u006f\u006e\u0073\u006f\u006c\u0065.\u006c\u006f\u0067('\u0048\u0065\u006c\u006c\u006f \u0077\u006f\u0072\u006c\u0064');

//2. Error
console.error('Error');

//3. Literals
console.log(null, undefined, true, false, 7, 0b00011, 0xFFd23, 0o7701, 'first', "second", `third`);

//4. Group

console.group("Numeric literals");
console.log(7);
console.log(0b00011);
console.log(0xFFd23);
console.log(0o7701);
console.groupEnd();

console.group("Boolean literals");
console.log(false);
console.log(true);
console.groupEnd();

console.group("Null");
console.log(null);
console.groupEnd();

console.group("String literals");
console.log("'first'");
console.log('"second"');
console.log('`third`');
console.groupEnd();

//5. Time

console.time();

console.group("Numeric literals");
console.log(7);
console.log(0b00011);
console.log(0xFFd23);
console.log(0o7701);
console.groupEnd();

console.group("Boolean literals");
console.log(false);
console.log(true);
console.groupEnd();

console.group("Null");
console.log(null);
console.groupEnd();

console.group("String literals");
console.log("'first'");
console.log('"second"');
console.log('`third`');
console.groupEnd();

console.timeEnd();

//6. Age
console.log(prompt("How old are you?", ''));

//7. 18-
console.log(confirm("Are you 18 already?"));

//8. Info
var myName = prompt("What is your name?", "");
var mySurname = prompt("What is your surname?", "");
var myAge = prompt("How old are you?", "");
var myGender = prompt("What is your gender?", "");
console.info(myName, mySurname, myAge, myGender);
