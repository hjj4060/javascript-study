//자바스크립트는 날짜와 시간을 표현하는 객체를 생성하는 Date() 생성자를 제공한다.

var then = new Date(2010, 0, 1);                    //2010년 1월 1일
var later = new Date(2010, 0, 1, 17, 10, 30);        //2010년 1월 1일 오후5시 10분 30초

var now = new Date()        //현재 날짜와 시간

console.log(later.getFullYear());   //2010
console.log(later.getMonth());      //0: 월은 0부터 시작
console.log(later.getDate());       //1: 일은 1로 시작
console.log(later.getDay());        //5: 요일. 0은 일요일, 5는 금요일