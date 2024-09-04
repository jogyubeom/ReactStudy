// common js 시스템
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES 모듈 시스템
import { add, sub } from "./math.js"; // ES 모듈 쓸 때는 확장자명까지 다 써줘야 한다.

import mul from "./math.js"; // default 로 내보낸 거는 이름을 내 맘대로 해서 가져올 수 있다.

// import mul, { add, sub } from "./math.js";
// 이런 식으로 합쳐서 작성할 수도 있다.

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
