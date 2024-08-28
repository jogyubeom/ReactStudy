// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
// -> 상수에 할당된 값, 객체 그 자체를 바꿀 수는 없지만, 객체의 속성은 얼마든지 조작할 수 있다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi(); // 점 표기법으로 메서드 호출
person["sayHi"](); // 괄호 표기법으로 메서드 호출
