// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 (내장 함수)
let obj2 = {}; // 객체 리터럴 (대부분 이걸 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  // key는 문자열, 숫자만 가능 , value는 모두 가능
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true, // 띄어쓰기가 포함된 문자열은 key에서도 ""로 감싼다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // = 이정환 , 없는 속성에 접근하면 undefined 반환
let age = person["age2"]; // [] 안에 key값을 꼭 '문자열'로 입력할 것! 그냥 쓰면 변수로 인식한다.

let property = "hobby";
let hobby = person[property]; // hobby = 테니스

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
console.log(result2);
