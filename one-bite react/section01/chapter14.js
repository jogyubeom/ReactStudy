// 스코프 : 변수나 함수에 접근하거나 호출할 수 있는 '범위'
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 함수도 변수처럼 함수 선언식 안에서 지역 스코프를 갖는다. 따라서 밖에서 호출 불가능
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  // -> 반복문 내의 d 는 물론, 초기식의 i도 지역 스코프를 갖기에 밖에서 접근할 수 없다.
  let d = 1;
  function funcB() {} // 함수 선언식 안에서와 달리 if문, for문 등에서는 함수가 지역 스코프를 갖지 않는다.
}

funcB();
