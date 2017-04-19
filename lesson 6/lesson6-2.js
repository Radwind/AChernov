/*1. bigLetter
Напишите функцию bigLetter(str), которая возвращает строку str с заглавным первым символом
*/

function bigLetterStr (str){
  var newStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newStr
}
bigLetterStr(prompt("Enter text"));

/*
2. zEbRa
Напишите функцию zebra(str), которая возвращает строку str с заглавными символома под непарными номерами
Модифицируйте функции zebra(str, flag), которая возвращает строку str с заглавными символома под непарными номерами, 
если аргумент flag отсутствует или false, если флаг true - заглавные символы под парными номерами. (0 определять как парное число)

'use strict';
function zebra(str, flag) {
    ...
}
zebra('hello world', false); // "HeLlO WoRlD"
zebra('hello world', true); // "hElLo wOrLd"

*/

function zebra (str, flag){
  var newstr = "";
  if (flag == false || flag == undefined){
    for (i=0; i<str.length; i++){
      if (i % 2 === 0) newstr += str[i].toUpperCase()
      else newstr += str[i]
    }
    return newstr
  }
  else {
    for (i=0; i<str.length; i++){
      if (i % 2 !== 0) newstr += str[i].toUpperCase()
      else newstr += str[i]
    }
    return newstr
  }
}
zebra (prompt("Enter phrase",""), 1)

/*3. includes
Напишите функцию includes(base, str), проверяет, включает ли одна строка в себя другую, возвращает true/false. 
(фичи ES6 использовать нельзя)
*/

function includes(base, str){
    base = base.toLowerCase();
    str = str.toLowerCase();
    if (~base.indexOf(str)) return true
    else return false
}
includes(prompt("Enter phrase",""), prompt("Enter search query",""))

/*4. endsWith
Напишите функцию endsWith(base, str), возвращает true, если строка base заканчивается подстрокой str. (фичи ES6 использовать нельзя)
*/
function endsWith(base, str) {
    base = base.toLowerCase();
    str = str.toLowerCase();
    if(str === base.slice(-(str.length))) {
        return true;
    } 
    else return false;
}
endsWith(prompt("Enter phrase",""), prompt("Enter search query",""));

/*5. startsWith
Напишите функцию startsWith(base, str), возвращает true, если строка base начинается со строки str. (фичи ES6 использовать нельзя)
*/
function startsWith(base, str) {
    base = base.toLowerCase();
    str = str.toLowerCase();
    if(str === base.slice(0, str.length)) {
        return true;
    } 
    else return false;
}
startsWith(prompt("Enter phrase",""), prompt("Enter search query",""));

/*
6. repeatString
Напишите функцию repeat(str, times), возвращает результат повторения строки str times раз. 
Внутри функции делать проверку аргумента : 
                [times is целое число; times is Number; times > 0; times != NaN; times != Infinity]. 
                Если times == 0 вернуть пустую строку.(фичи ES6 использовать нельзя)
*/

function repeatString(str, times){
  var repeat = "";
  
  for(i=0; i<times; i++){
        repeat += str ;
  };
  return repeat;
  }

console.log(repeatString("str", 15));

/*7. reversit
Напишите функцию reversit(str), которая переворачивает строку str. 
Используйте цикл for, который меняет местами первый и последний символы, затем следующие и т. д. до предпоследнего. 
Строка str должна передаваться в функцию reversit(str) как аргумент. 
Также организовать безопасность типов - проверять есть ли аргумент str строкой и преобразовать str в строку явно. 
*/

function reversit(str){
    if (typeof str !== 'string') str = String(str);
    var newstr = "";
    for (var i = str.length - 1; i >= 0; i--) newstr += str[i];
    return newstr;
}
reversit(prompt("Enter phrase","")

/*
8. getCharJavaScriptUltra+100500DoubleVersion
Напишите функцию require(n) предназначенную для получения денег данных от пользователя. 
Функция получает аргумент n - количество символов, которые нужно получить от пользователя. 
Использовать цикл и prompt, каждый раз запрашивать количество символов которое "должен" пользователь
*/

function require(n) {
  var str = prompt('Enter symbols');
	while(str.length !== n) {
    alert('Wrong!')
    console.log('Wrong!');
    str = prompt('Enter symbols');
  }
  return true
}
require(5)

/*9. randomStr
Напишите функцию randomStr(n), n - длина строки из случайно сгенерированных символов.
*/
function randomStr(n){
  var str ='';
  while(str.length < n)
    str += String.fromCharCode(Math.floor(Math.random() * (122-97+1)) + 97) // from a-z
  return str
}
randomStr(+prompt("enter number"))

/*10. sliceKingdom (с анг. slices - скибочки:)
Создайте строку randomStr(100). Разбейте эту строку на отдельные слова случайной длины и выведите в консоль.
*/
function randomStr(n){
  var str ='';
  while(str.length < n)
    str += String.fromCharCode(Math.floor(Math.random() * (122-97+1)) + 97) // from a-z
  return str
}
randomStr(10)

var slk = randomStr(10)
var newslk = ""
for (i = 0; i < slk.length; i++) {
		newslk += slk.substr(Math.floor(Math.random() * slk.length) + 1, Math.floor(Math.random() * slk.length) + 1) + ' ';
	}
console.log(newslk)

/*11. subKingdom
Используя результаты задания 10:
- Выведите в консоль подстроку с 6 по 20 символ включительно
- Выведите в консоль подстроку начиная с 3 символа, длиной 8 символов
*/

function randomStr(n){
  var str ='';
  while(str.length < n)
    str += String.fromCharCode(Math.floor(Math.random() * (122-97+1)) + 97) // from a-z
  return str
}
randomStr(25)

var slk = randomStr(25)
var newslk = "";
for (i = 0; i < slk.length; i++) {
		newslk += slk.slice(Math.floor(Math.random() * slk.length) + 1, Math.floor(Math.random() * slk.length) + 1)+ " ";
	}
console.log(newslk)
console.log("________________")
console.log(newslk.substring(5,21))
console.log("_______________")
console.log(newslk.substr(2,8))

/*12. phoneNumber
Дано телефонный номер в формате "0682091234". 
Нужно его преобразовать в формат "+38 (068) 209-12-34". Создайте функцию, которая выполняет эту задачу.
*/

function phoneNumber(number){
    var newnumber = "";
    newnumber += "+38 (" + number.slice(0,3) + ") " + number.slice(3,6) + "-" + number.slice(6,8) + "-" + number.slice(8);
    return newnumber
}
phoneNumber(prompt("Enter a number",""))

/*13. myTrim
Функция Trim брезает пробельные символы в начале и в конце строки. 
Часть стандарта ECMAScript 5, но функции trimLeft() и trimRight() не стандартизированы. 
Напишите свои реализации trimLeft(str) и trimRight(str):
- trimLeft - Обрезает пробельные символы с левой стороны строки
- trimRight - Обрезает пробельные символы с правой стороны строки.
*/

function trimLeft(str){
    while (str.slice(0,1)=== " ") str = str.slice(1)
    return str
}
trimLeft(prompt("enter phrase",""))


function trimRight(str){
    while (str.slice(-1)=== " ") str = str.slice(0, str.length-1)
    return str
}
trimRight(prompt("enter phrase",""))

/*14. indexOfAll
Напишите функцию indexOfAll(base, str), которая возвращает список всех вхождений str в строке base 
*/

function indexOfAll(base, str){
    var start = 0;
    while (true) {
        var strPos = base.indexOf(str, start);
        if (strPos == -1) {
          console.log("Sorry, nothing was found")
          break;
        }
        console.log( strPos + " " + (strPos+str.length-1) + "\n");
        start = strPos + 1; 
    }
}
indexOfAll (prompt("Enter phrase",""), prompt("Enter search query",""));
