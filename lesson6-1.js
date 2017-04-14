/*1. Минимум---------------------------------------------------------------------------------------------------------------------
В предыдущей главе была упомянута функция Math.min, возвращающая самый маленький из аргументов. 
Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
*/

function min (a, b){
    if (a<b) return a;
    else return b
}
console.log(min (+prompt("enter number 1"), +prompt("enter number 2")));

/*2. Even number-----------------------------------------------------------------------------------------------------------------
Создайте функцию isEven, которая возвращает значение true или false в зависимости от того является ли аргумент x парным.
*/

function isEven (x){
    if(x%2 === 0) return true;
    else return false
}
console.log(isEven(+prompt("enter number")));

/*3. dayOfWeek-------------------------------------------------------------------------------------------------------------------
Создайте функцию, которая принимает в себя число x э [1; 7] и возвращает название дня недели. Используйте switch-case.
*/

function dayOfWeek (x){
    switch (x){
        case 1: 
            return "Monday";
            break;
        case 2: 
            return "Tuesday";
            break;
        case 3: 
            return "Wednesday";
            break;
        case 4: 
            return "Thursday";
            break;
        case 5: 
            return "Friday";
            break;
        case 6: 
            return "Saturday";
            break;
        case 7: 
            return "Sunday";
            break;
        default:
            return "Not day of a week";
    }
}
console.log(dayOfWeek(+prompt("Enter number from 1 to 7")))

/*4. calcBox---------------------------------------------------------------------------------------------------------------------
Создайте функцию, которая принимает в себя 3 аргумента и рассчитывает объем коробки.
*/

function calcBox(height, width, length){
    var amount = height * width * length;
    return amount
}
console.log(calcBox(+prompt("enter height"), +prompt("enter width"), +prompt("enter length")))

/*5. hmsToSecs-------------------------------------------------------------------------------------------------------------------
Напишите функцию hmsToSecs, имеющую три аргумента h, m, s. 
Функция должна возвращать эквивалент переданного ей временного значения в секундах. 
Создайте программу, которая будет циклически запрашивать у пользователя ввод значения часов, минут и секунд и выводить результат работы функции на экран.
*/

function hmsToSecs (h, m, s){
    var seconds = h*3600 + m*60 + s
    return seconds;
}
console.log(hmsToSecs(+prompt("hours"),+prompt("minutes"),+prompt("seconds")) + ' seconds')

/*6. callCounter-----------------------------------------------------------------------------------------------------------------
Напишите функцию, которая при каждом вызове будет выводить на экран количество раз, которое она вызывалась ранее. 
Напишите программу, которая будет вызывать данную функцию не менее 10 раз.
*/

var counter = 0;
function callCounter(){
    counter += 1;
    return counter;
}
for (i = 0; i<30; i++) console.log(callCounter());

/*7. primeNumber-----------------------------------------------------------------------------------------------------------------
Напишите функцию, которая которая принимает в себя натуральное число n и возвращает самое большое простое число в диапазоне (2; n).
*/ 

function primeNum (n){
  var maxPr=2;
  for (var i = 2; i<n; i++){
    var flag = 0;
    for (var j = 2; j<i; j++){
     if (i%j===0) flag = 1
    }
    if (flag===0) maxPr=i
  } 
  console.log(maxPr)
}
primeNum(+prompt("Enter a number"))