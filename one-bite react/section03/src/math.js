// math 모듈 (common js 버전)

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = {
//   add: add, // 이렇게 이름 같으면 add 만 써도 됨.
//   sub: sub,
// };

// math 모듈 (ES 모듈 버전)

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// export { add, sub };

// export 를 함수 앞에 붙여주기만 해도 된다.
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
