import React from "react";

export default function UseInput(validateFunc: (value: string) => {}) {
  const [inputValue, setInputValue] = React.useState("");
  const [isTouched, setIsTouched] = React.useState(false);
  const isValid = validateFunc(inputValue);
  const hasError = !isValid && isTouched;

  function changeHandler(e: { target: HTMLInputElement }) {
    setInputValue(e.target.value);
  }

  function blurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setInputValue("");
    setIsTouched(false);
  }

  return {
    value: inputValue,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
}
