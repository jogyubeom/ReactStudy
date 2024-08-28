// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅 (선언이 아직 안된 함수도 아래에서 끌어올려서 실행 가능)
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another(); // 중첩 함수 호출
  let area = width * height;

  return area; // 값을 반환한다.
}
