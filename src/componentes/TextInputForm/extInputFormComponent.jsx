import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormComponent() {
  const [inputType, setInputType] = useState("password");

  function handelFormSubmit(e) {
    e.preventDefault();
    console.log("form submited");
  }

  function handleTextInputChange(e) {
    console.log(e.target.value);
    console.log("Input change");
  }

  function handleShowHideClick() {
    console.log("hi");
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <TextInputForm
      inputType={inputType}
      handelFormSubmit={handelFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormComponent;
