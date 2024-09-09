// const Button = (props) => {
//   console.log(props);
//   return (
//   <button style={{color: props.color}}>
//     {props.text} - {props.color.toUpperCase()}
//   </button>
//   )
// }

const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e); // SyntheticBaseEvent (합성 이벤트)
    console.log(text);
  }

  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
}

export default Button