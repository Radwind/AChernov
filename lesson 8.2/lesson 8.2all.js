/*1. compareFunctionNumber
Напишите функцию compareFunctionNumber(a, b), 
которая принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. 
Приводить к числу оба аргумента внутри функции.
*/

function compareFunctionNumber(a,b){
    if (parseInt(a)>parseInt(b)) return true
    else return false;
}
compareFunctionNumber("34n", "76r");

/*
2. compareFunctionString
Напишите функцию compareFunctionString(a, b), которая сравнивает строки, 
принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. 
Если тип одного из аргументов не строка, возвращать false.
*/

function compareFunctionString(a,b){
    if (a <= b || (typeof a != 'string') || (typeof b != 'string')) return false
    else return true
}
compareFunctionString("ghghgh", 5);

/*3. compareFunctionString

Напишите функцию compareFunctionType(a, type), которая принимает 2 аргумента 
(первый - значение, второй - строка из типом или подтипом) 
и возвращает true если первый принадлежит к типу второго, false в ином случае.

Список типов и подтипов, которые должна обрабатывать функция:
- undefined
- null
- Number
- NaN
- Infinity
- String
- Boolean
- Object
- Array
- Function

Обратите внимание: строка 'Function', 'function', 'functiOn' должны обрабатываться одинаково 
(опускаем значения аргумента type в нижний регистр). 
*/

function compareFunctionString (a, type){
    if (typeof a === type.toLowerCase()) return true
    else if (Array.isArray(a) === true && type.toLowerCase() === "array") return true
    else return false;
}

compareFunctionString ([],"aRRay")

/*
4. singleExemplar
Напишите функцию singleExemplar(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) 
и возвращает новый массив, где все элементы уникальны в пространстве массива.
'use strict';
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {1}, null, NaN, 1, 3];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], NaN, 'str', '1', {1}]
Помните: NaN не равен ничему включая себя.
*/

'use strict';
function singleExemplar(a) { 
    if (Array.isArray(a)===true){
        var a_temp = [];
        for (var i = 0; i<a.length; i++){
            if (a_temp.indexOf (a[i], 0) === -1){
                a_temp.push(a[i]);
            }
        }
        return a_temp;
    }
}
var myArray = [null, 1, 2, 2, 3, [1, 2], NaN, 'str', '1', {x:1}, null, NaN, 1, 3];
singleExemplar(myArray); // [null, 1, 2, 3, [1, 2], NaN, 'str', '1', {1}]



/*
5. singleExemplarStrict
Напишите функцию singleExemplarStrict(a), которая принимает 1 аргумент (массив, реализовать безопасность типов) 
и возвращает новый массив, где все элементы уникальны в пространстве массива.

'use strict';
singleExemplar(a) { .. }
var myArray = [null, 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]];
singleExemplar(singleExemplar); // [null, 1, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4]]

singleExemplar и singleExemplarStrict работают с примитивами работают аналогично. 
Но singleExemplarStrict считает массивы одинаковими если: 1 - их длины одинаковые, 
2 - под одинаковыми индексами стоят одинаковые значения. 
В контексте функции singleExemplarStrict объекты одинаковые если: 1 - у них одинаковое количество ключей
*/

var deepEqual = function (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else if (x !== y)
    return false;
  else
    return true;
}

function singleExemplarStrict (arr){
    if (Array.isArray(arr)===true){
        var a_temp = [];
        for (var i = 0; i < arr.length; i++){
            console.count();
            var flag = 0;
            for (var j=0; j<a_temp.length; j++){
                if (arr[i] === a_temp[j] || deepEqual(arr[i], a_temp[j])) {
                    flag = 1;
                }
            }
                if (flag === 0) a_temp.push(arr[i]);
        }
        }
    return a_temp;
}

var myArray = [null, 1, 2, 2, 3, [1, 2], [1, 2, 3], [1, 2, 4], [1, 2, 3]];
singleExemplarStrict (myArray);


/*
6. nodeList
var list = document.querySelectorAll('*');
 - магическая строка создаст переменную list и запишет в нее объект со всеми тегами страницы.
*/
var list = document.querySelectorAll('*');

//6.1 Создайте массив arrList из элементов объекта list.

var arrList = [];
for (key in list){
	arrList.push(list[key]);
}
console.log(arrList);

//6.2 Создайте строку из названий всех тегов html-элементов - nodeName, используя Array.prototype.join().

var newarr = arrList.map(function(el){
	return el.nodeName;
})
newarr.join()

//6.3 Создайте строку из названий всех тегов через разделитель, используя Array.prototype.join().

newarr.join('; ');

//6.4 Отсортируйте массив arrList от функций, используя sort().

arrList.forEach((e) => {
        e.toString = function(){
                return this
        };
});
console.dir(arrList);

arrList = arrList.filter(function(e){
    if (typeof e !== 'function' && typeof e !== 'number') {
        return true;
    } else {
        return false;
    }
})
console.dir(arrList);

//6.5 Отсортируйте элементы массива arrList по названию тега в алфавитном порядке.

function compareFunction (a,b){
    if (a.nodeName < b.nodeName) return -1;
    if (a.nodeName > b.nodeName) return 1;
}
arrList.sort(compareFunction);

//6.6 Отсортируйте элементы массива массиа arrList по названию тега в обратном от задания №5 порядке 
//(не используя Array.reverse()), результат сохранить в arrListReverse.

function compareFunctionReverse (a,b){
    if (a.nodeName > b.nodeName) return -1;
    if (a.nodeName < b.nodeName) return 1;
}
var arrListReverse = arrList.sort(compareFunctionReverse);

//6.7 Заданние №6 используя Array.reverse().

arrListReverse.reverse();

//6.8 Lorem ipsum dolor sit amet...

//6.9 Создайте массив arrListPlusChildren из элементов массива arrList и их потомков.

function getArray (obj){
    var arr_temp = [];
	arr_temp.push(obj);
    for (key in obj){
        arr_temp.push(obj[key]);
    }
    return arr_temp;
}

var arrListPlusChildren = arrList.map(function(e){
	return getArray(e);
});

//6.10 Создайте массив из 100 элементов массива arrList используя slice()

var sliceList = arrList.slice(0,101);

//6.11 Выведите в консоль все элементы arrList не используя циклов.

arrList.forEach(function(item){
	console.dir(item);
});

//6.12 Создайте массив из nodeName элементов arrList не используя циклов.

var arrListNode = arrList.map(function(item){
	return item.nodeName;
});


//6.13 Создайте массив из withoutSpan c элементов arrList не используя циклов, откинув все span элементы.

var withoutSpan = arrList.filter(function(element){
    if (element.nodeName==="SPAN")
        return false
    else
        return true;
    });


//6.14 Напишите функцию createWithoutElemens(arr, str), arr - массив элементов, 
//str - строка с названием эле­мен­тов, которые нужно отсеять в процессе работы функции. Функция возвращает новый массив.

function createWithoutElemens (arr, str){
    return arrList.filter((e)=>{
        if (e.nodeName.toLowerCase() === str.toLowerCase()) 
            return false
        else
            return true;
        });
};
var arrList = [
    {x : 1, nodeName : 'SPAN'},
    {x : 2, nodeName : 'DIV'},
    {x : 3, nodeName : 'SPAN'},
    {x : 4, nodeName : 'P'},
    {x : 5, nodeName : 'SPAN'},
    {x : 6, nodeName : 'DIV'}
];
createWithoutElemens(arrList, 'span'); 
createWithoutElemens(arrList, 'DIV'); 




//6.15 Напишите аналог функции createWithoutElemens(arr, str), arr - массив элементов, 
//str - строка с названием эле­мен­тов или массив таких строк, которые нужно отсеять в процессе работы функции. 
//Функция возвращает новый массив.

function createWithoutElemens(arr, str) {
	return arr.filter(function (e) {
		for (var i = 0; i < str.length;  i++) {
			if (e.nodeName === str[i]) return false
		}
		return true
	})
}

var arrList = [
    {x : 1, nodeName : 'SPAN'},
    {x : 2, nodeName : 'DIV'},
    {x : 3, nodeName : 'SPAN'},
    {x : 4, nodeName : 'P'},
    {x : 5, nodeName : 'SPAN'},
    {x : 6, nodeName : 'DIV'}
];
createWithoutElemens(arrList, ['DIV', 'P']);



/*7. Напишите функцию createRectangle(m, n), 
Функция возвращает пустой прямоугольный массив m на n. m - количество столбиков, 
n - количество рядов. n и m генерировать рандомно ( 2 < n < 12, 4 < m < 6).

Положите на случайные позиции массива созданого функциией createRectangle, случайное количество писем из случайным содержимым.
Подсчитайте количество писем в массиве.
Наклейте на каждое письмо марку с картинкой, картинки найти в google. (Добавляем поле stamp из ссылкой на картинку). */


//------------------------------RANDOM NUMBER
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//-------------------------------LETTER-------------------------------------------------------------//
function createLetter(){
      function Person(firstName, lastName, adress){
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;        
      };

      var people = [
        new Person('John', 'Doe', '100, 5th Avenue, NY'),
        new Person('Peter', 'Schultze', '99, Main st., Berlin'),
        new Person('Vasyl', 'Petrenko', '66/3 Grushevsky st., Khmelnytsky'),
        new Person('Brad', 'Pitt', '65, Ocean St., Santa-Monica'),
        new Person('Evgenia', 'Lozinskaya', '44, Arbat St., Moscow'),
        new Person('Johnny', 'Cage', '58, Grand Avenue, LV'),
        new Person('Zinaida', 'Tolochko', '47, Khreschatyk st., Kiev'),
        new Person('Jane', 'Doe', '101, 5th Avenue, NY')
      ];

      function newWord(){
          var symb = "abcdefghijklmnopqrstuvwxyz";
          var maxs = symb.length;
          var word = "";
          var wordLength = randomNumber(2, 8);
          while (word.length < wordLength){ 
            word += symb[randomNumber(1,maxs)];
          }
          return word;
      }

      function newTheme(){
          var themeLength = randomNumber(1,4);
          var theme = "";
          for (var i = 0; i<themeLength; i++){
              theme = theme + newWord() + ' ';
          }
          return theme
      }

      function newMessage(){
          var mesLength = randomNumber(10, 50);
          var mes = "";
          for (var i = 0; i<mesLength; i++){
            mes = mes + newWord() + ' ';
          }
          return mes;
      }
        
    function Letter(){
          this.destination= people[randomNumber(0, 7)];
          this.addressee= people[randomNumber(0, 7)];
          this.creationTime = randomNumber(0, new Date().getTime());
          this.subject = newTheme(),
          this.message = newMessage();
      }
    return new Letter();
}

//-----------------------------------CREATE RECTANGLE----------------------------------------------//
function createRectangle(m,n){
  	var arr = [];
	for (var i = 0; i < m; i++){
		arr.push([]);
	}
	var count = randomNumber(1, m*n);
	console.log(count);
  while(count != 0){
    var x = randomNumber(0, m-1);
    var y = randomNumber(0, n-1);
    if (typeof arr[x][y] !== 'object'){
      arr[x][y] = createLetter();
      count--;
    } 
  }
  return arr;
};
var arr = createRectangle(randomNumber(4,6), randomNumber(2,12));

//-------------------------------------------ADD STAMPS---------------------------------------------------//
for (var i = 0; i<arr.length;i++){
  for (var j = 0; j<arr[i].length; j++){
      if (arr[i][j] != undefined){
        arr[i][j].stamp ='https://volstamp.in.ua/wa-data/public/shop/products/06/01/106/images/1173/1173.96x96.jpg'
      }
  }
};

console.table(arr)
