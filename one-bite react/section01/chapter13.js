// 1. 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수

function main(value) {
  value();
}

main(() => {
  //   console.log("i am sub");
}); // -> 콜백 함수를 화살표 함수로 넣어도 된다.

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
