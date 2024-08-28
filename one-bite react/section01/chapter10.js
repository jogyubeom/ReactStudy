for (let idx = 1; idx <= 10; idx++) {
  // 초기식(변수값 할당), 조건식(참일 때만 반복 진행), 증감식(반복마다 증감)
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
