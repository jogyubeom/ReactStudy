// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// [{ name: "이정환", hobby: "테니스" },
// { name: "김효빈", hobby: "테니스" }]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// mapResult1 = [2, 4, 6]

let names = arr1.map((item) => item.name);
// names = ['이정환', '김효빈', '홍길동']

// 3. sort
// 원본 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
// 배열의 요소가 숫자일 경우엔 정렬 기준을 콜백 함수로 알려줘야 한다.
arr3.sort((a, b) => {
  // 내림차순 정렬을 하고 싶을 때
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted(); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" "); // 기본 구분자는 ','
console.log(joined); // "hi im winterwood"
