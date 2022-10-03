/**
 * 자바스크립트는 정수 값과 실수 값을 구분하지 않는다.
 * 모든 숫자를 실수로 표현한다.
 * -9007199254740992(-25^53) ~ 9007199254740992(2^53) 사이의 정수를 정확하게 표현한다.
**/

//Infinity, NaN
console.log(123/0); //0으로 나눴을경우 Infinity
console.log(123/"a"); //문자로 나눴을경우 NaN 

console.log(isFinite(123/0)); //isFinite() 함수는 NaN, Infinity, -Infinity 이외의 숫자라면 참을 반환한다.
console.log(isNaN(123/"a")); //NaN 판별 함수 isNaN()