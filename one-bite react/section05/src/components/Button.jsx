// const Button = (props) => {
//   console.log(props);
//   return (
//   <button style={{color: props.color}}>
//     {props.text} - {props.color.toUpperCase()}
//   </button>
//   )
// }

const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
}

export default Button