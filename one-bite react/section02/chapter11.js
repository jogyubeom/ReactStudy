console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);
// 자바 스크립트 엔진은 하나라서 비동기 처리는 웹 APIs 라는 별도의 브라우저 환경에 처리를 맡긴다.

console.log(3);
