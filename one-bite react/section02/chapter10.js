// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 , 현재 시간 출력
let date2 = new Date("1997-01-07,10:10:10"); // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)
let date3 = new Date("1997/01/07/23:59:59"); // Tue Jan 07 1997 23:59:59 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정세계시 = UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1); // = date1

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 2024
let month = date1.getMonth() + 1; // 8, index처럼 월이 0부터 시작해서 보통 1을 더해준다.
let date = date1.getDate(); // 30

let hour = date1.getHours(); // 14
let minute = date1.getMinutes(); // 26
let seconds = date1.getSeconds(); // 58

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 2 넣으면 +1 해놓은거 때문에 3월 된다고 생각하면 됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023 , (시간은 제외하고 날짜만 출력)
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59 (로컬라이징된 형태로 출력)
