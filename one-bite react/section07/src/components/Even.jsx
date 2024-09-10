import { useEffect } from "react"

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수
    // 리턴문 안에 있는 함수
    // mount 시에 작동하는 useEffect 가 끝날 때 작동
    // = unmount 시에 작동
    return () => {
      console.log("unmount");
    }
  }, [])
  return <div>짝수입니다</div>
}

export default Even