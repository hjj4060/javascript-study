//불리언 값이 될수 있는 표현식은 항상 예약어인 true와 false중 하나의 값으로 평가된다.

//false값으로 변환되는 값
undefined
null
0
-0
NaN
""          //빈 문자열

//false값을 제외한 객체를 포함하는 다름 모든 값은 불리언 값 true로 변환된다.

var b = true;

b.toString();
