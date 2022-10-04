//ES3에서 문열 리터럴은 한 줄로 작성해야 하지만 ES5 부터는 역슬래쉬로 여러줄을 작성할 수 있다.

//한줄로 3줄 작성
var s = "One\nTwo\nThree";

//3줄로 한줄 작성
var ss = "one\
two\
three"

console.log(s);
console.log(ss);

var msg = "hello,world";
msg.charAt(0);               //첫번쨰 문자
msg.charAt(msg.length-1);    //마지막 문자
msg.substring(1,4);          //두번째, 세번째, 네번째 문자
msg.slice(1,4);              //두번째, 세번째, 네번째 문자
msg.slice(-3);               //마지막 3문자
msg.indexOf("l");            //"l" 이 위치한 첫번째 위치
msg.lastIndexOf("l");        //"l" 이 위치한 마지막 위치
msg.split(",");              //, 로 문자열 나눔
msg.replace("h", "H");       //문자열에서 h를 H로 바꿈
msg.toUpperCase();           //대문자로 바꿈

//replace와 toUpperCase()는 기존문자열을 변경하지 않고 새 문자열을 반환한다.
