/**
 * 전역객체(Global Object)
 * 전역 객체의 프로퍼티는 자바스크립트 프로그램 전역에서 사용할 수 있게 정의된 symbol이다.
 * 자바스크립트 인터프리터가 시작할때, 새로운 전역 객체를 만들고 그 프로퍼티들을 초기화 한다.
 * 
 * undefined, Infinity, NaN은 전역 프로퍼티
 * isNaN(), parseInt()는 전역 함수
 * Date(), RegExp()는 전역 생성자 함수
 * Math, JSON, Window 전역 객체
 * Window 객체는 브라우저 창에 포함된 모든 자바스크립트 코드를 위한 전역 객체다.
**/

/**
 * 래퍼 객체(Wrapper Object)
 * 문자열은 객체가 아닌데 프로퍼티를 가지고 있다 문자열의 s의 프로퍼티를 참조하려고 할 때, 자바스크립트는 new Stirng(s)를 호출한 것처럼 문자열 값을 객체로 변환한다. 이것이 래퍼객체이다.
**/
var s = "hello world";
var word = s.substring(1,4); //s의 값이 변하진 않음.

//프로퍼티 참조를 하고나서 이 임시객체는 메모리에서 회수된다. 
var s = "test";
s.len = 4; //임시객체가 만들어지면서 s.len에 값이 4가 할당됨 그리고 사라짐
var t = s.len; //s.len을 할때 다시 임시객체가 만들어짐 s.len은 undefined임
console.log(t); //undefined


//기본객체와 래퍼객체의 차이는 ===로 비교할수 있으며, typeof연산자로도 확인 가능하다.
var s = "test", n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);

console.log(s == S, s === S); //true, false 
console.log(typeof(s), typeof(S)); //string, object 