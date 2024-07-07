import React from "react";
import InputContainer from "../InputContainer/InputContainer";
import classes from "./input.module.css";

function Input(
  { label, type, defaultValue, onChange, onBlur, name, error },
  ref
) {
  const getErrorMessage = () => {
    if (!error) return;
    if (error.message) return error.message;
    // defaults
    switch (error.type) {
      case "required":
        return "This field is required";
      case "minLength":
        return "Field Is Too Short";
      default:
        return "*";
    }
  };

  return (
    <InputContainer label={label}>
      <input
        className={classes.input}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        placeholder={label}
      />
      {error && <div className={classes.error}>{getErrorMessage()}</div>}
    </InputContainer>
  );
}

export default React.forwardRef(Input);
