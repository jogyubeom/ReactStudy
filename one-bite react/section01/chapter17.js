// 1. 배열 생성 (배열 : 여러 개의 값을 순차적으로 담을 수 있는 자료형)
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 이걸 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
// 어떤 타입의 값이든 배열 안에 넣을 수 있다. 길이 한계도 없다.

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2

arrC[0] = "hello"; // 배열 안의 값 수정도 가능
console.log(arrC);
