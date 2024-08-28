// 1. 함수 표현식

function funcA() {
  // -> 이건 선언식
  //   console.log("funcA");
}

let varA = funcA;
varA(); // 함수 자체를 변수에 담아서 변수명으로 함수를 출력할 수 있다!

let varB = function () {
  // 그래서 이런 표현식이 가능하다.
  //   console.log("funcB");
};
// 함수 표현식에서는 호이스팅이 불가능하다.

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
