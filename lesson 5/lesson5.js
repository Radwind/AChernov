//1. Треугольник в цикле--------------------------------------------------------------
var str=""
for (i=0; i<7; i++) console.log(str+="#");

//2. FizzBuzz-------------------------------------------------------------------------
var a = "Fizz";
var b = "Buzz";
for (i=1; i<100; i++){
    if (i % 3 === 0) {
      if (i%5===0) console.log(a+b);
      else console.log(a);
    }
    else if (i % 5 === 0) console.log(b);
    else console.log(i);
}

//3. Chess board----------------------------------------------------------------------
var a = "";
var sizea = prompt("Vertical size", "");
var sizeb = prompt("Horizontal size", "");
for (var i=0; i<sizea; i++){
    for(var j=0; j<sizeb; j++){
        if ((i+j)%2==0)
            a+=" ";
        else
            a+="#";
    }
    a +="\n";
}
console.log(a);

//4. charSum--------------------------------------------------------------------------
var m = prompt("Enter positive number","");
var num = 0;
for (var i=0; i<m.length; i++) num += +m[i];
console.log(num);

//5. Prime number---------------------------------------------------------------------
var m = +prompt("Enter positive number","");
var flag = 0;
for (var i = 2; i<m; i++){
     if (m%i==0) {
         flag = 1;
         break;
     }
}
if (flag == 0) console.log(m, "is primery"); else console.log(m, "is not primery");

//6. Sausagefest----------------------------------------------------------------------
var str = "Мы приехали в Запорожье";
for (i = 0; i < str.length; i++){
    if (str[i]==="З") console.log(i);
}