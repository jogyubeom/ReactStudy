import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";


// import { getEmotionImage } from "./util/get-emotion-image";

const mockData = [
  {
    id : 1,
    createdDate: new Date("2024-08-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id : 2,
    createdDate: new Date("2024-08-18").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id : 3,
    createdDate: new Date("2024-09-18").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return state
  }
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav("/new");
  // };

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content,
      },
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  return (
    <>
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}
      {/* Routes 컴포넌트 안에는 라우트만 들어갈 수 있다. */}
      {/* Routes 밖에 배치된 요소는 모든 페이지에 보이게 된다. */}
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onDelete,
            onUpdate,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
