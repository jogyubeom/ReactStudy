// 단락 평가 => 첫번째 피연산자 값만으로도 연산 결과가 확정된다면 두번째 피연산자에는 아예 접근조차 하지 않는 것

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
