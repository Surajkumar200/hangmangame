import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormComponent() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  const  navigate = useNavigate()

  function handelFormSubmit(e) {
    e.preventDefault();
    console.log("form submited", value);
    if (value) {
      navigate(`/play`, {state : {wordSelected:value}});
           
    }
  }

  function handleTextInputChange(e) {
    console.log(e.target.value);
    setValue(e.target.value)
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
