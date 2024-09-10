import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false)

  // 라이프 사이클
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, [])  // deps가 비어있으면 처음 딱 한번만 작동함

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return  // mount 시점을 걸러내는 조건문
    }
    console.log("update");  // mount 이외에 렌더링될 때는 여기가 실행됨
  })

  // 3. 언마운트 : 죽음 -> ./components/Even.jsx

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input])
  // 뒤 배열의 요소에 의존하여 앞의 콜백 함수가 작동함
  // 의존성 배열 = dependency array = deps

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;