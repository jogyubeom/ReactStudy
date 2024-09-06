// JSX 주의 사항
// 1. 중괄호 내부에는 값으로 평가되는 자바스크립트 표현식만 넣을 수 있다. 따라서 조건문, 반복문 등은 안된다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. 객체, boolean, undefined, null 등은 렌더링되지 않는다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. <></> 같이 빈 태그로 묶어줘도 된다. 그럼 실제로는 최상위태그가 없는 상태로 렌더링 된다.

import "./Main.css"

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  }

  // return (
  // <>
  //   {user.isLogin ? <div>로그아웃</div> : <div>로그인</div> }
  // </>
  // )

  if (user.isLogin) {
    return <div 
    // style={{
    //   backgroundColor:"red",
    //   borderBottom:"5px solid blue"
    // }}
    className="logout"
    >로그아웃</div>
  } else {
    return <div>로그인</div>
  }
}

export default Main