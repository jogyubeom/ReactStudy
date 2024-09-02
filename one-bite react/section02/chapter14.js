// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  // 애초에 promise 를 반환하는 함수였다면 async 가 별다른 일을 하지 않음
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// 더이상 then 메서드를 쓰지 않아도 됨

async function printData() {
  const data = await getData(); // getData 비동기 작업이 끝날 때까지 기다림
  console.log(data);
}

printData();
