import classes from "./button.module.css";

export default function Button({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
}) {
  return (
    <div className={classes.container}>
      <button
        type={type}
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor,
          color: color,
          fontSize: fontSize,
          width: width,
          height: height,
        }}
      >
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: "button",
  text: "Submit",
  backgroundColor: "#e72929",
  color: "white",
  fontSize: "1.3rem",
  width: "12rem",
  height: "3.5rem",
};
