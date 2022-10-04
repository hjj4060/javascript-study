//null은 값을 가지지 않는 객체이다. typeof 연산자를 사용하면 "Object"를 반환한다.

//undefined는 null보다도 심함 부재 상태이다. 초기화 되어 있지 않은 변수나, 존재하지 않는 객체 프로퍼티나 배열의 원소 값에 접근하려고 할때 얻는 값이다.
//typeof 연산자를 사용하면 undefined가 반환된다. undefined는 특별한 고유 값이다.

console.log(null == undefined);      //true
console.log(null === undefined);     //false

//시스템 수준에서 예기치 않은 상황에 발생한, 오류성 값 부재를 표현할 떄는 undefined를 사용하고
//예상 가능한 값 부재 상황을 표현하고 싶을 때는 null을 사용한다.
//값이 없음을 인자로 전달하고 싶다면 null을 사용하는게 바람직 하다.