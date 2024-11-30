//Operadores relacionais

/*
> maior
< menor
>= maior ou igual
<= menor ou igual
== igual
!= diferente
 */

console.log(5 > 2);
console.log(7 < 4);
console.log(8 >= 8);
console.log(9 <= 7);
console.log(5 == 5);
console.log(!(4 == 4));



/*
Lógicos

! => negação
&& => conjunção
|| => disjunção

ordem de precedência
() ** / ... aritmetico  
 > < >= <= .. relacionais
 ! 
 &&  => logico
 ||

*/

var a = 5;
var b = 8

console.log(a < b && b > a); //true
console.log(a == b && a <= b); //false
console.log(a > b && b % 2 == 0);//false
console.log(a <= b || b / 2 == 2); //true


/*
Ternário

teste ? tue : false
media >= 7 ? "Aprovado" : "Reprovado"

*/

var media = 7;

let aprovadoOuReprovado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(aprovadoOuReprovado);












