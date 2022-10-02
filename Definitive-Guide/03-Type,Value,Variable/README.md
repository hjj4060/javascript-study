자바스크립트의 타입은 크게 원시타입과 객체타입으로 나뉜다.

원시타입은 숫자, 문자열, 불리언, null, undefined가 있고 그 외의 값은 객체다.

객체는 이름과 값을 갖는 프로퍼티의 집합, 배열, 함수가 있다.
일반적인 객체는 프로퍼티의 조합이고 순서가 없다. 그러나 배열은 순서를 가져서 특별하다.
함수는 실행코드를 가지고 있어서 특별하다. 함수중에는 생성자 함수가 존재한다.

객체에 더이상 접근할 수 없는 경우 인터프리터는 그 객체가 다시 사용되지 않을거라 판단하고 자동으로 메모리에서 해제 한다.

일반적으로 숫자, 문자열, 불리언 값은 메서드를 가질 수 없지만 가진것처럼 동작한다. 

자바스크립트의 타입은 원시타입과 객체 타입으로 나뉠수 있다. 메서드를 가진 타입과 그렇지 않은 타입, 수정가능한 타입과 수정할 수없는 타입으로도 나뉨

문자열은 수정할 수 없는 타입

변수는 var 키워드로 선언한다. 함수밖에서 선언되면 전역변수고 안에서 사용하면 그 함수안에서만 사용가능한 지역변수이다.