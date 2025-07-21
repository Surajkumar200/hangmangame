import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  handelFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
  inputType,
}) {
  return (
    <form onSubmit={() => handelFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label="Enter a Word or a pharse"
          placeholder="Enter a word or phase here ... "
          onChangeHandeler={handleTextInputChange}
        />
      </div>
      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? "show" : "hide"}
          onClickHandler={handleShowHideClick}
        />
      </div>
      <div>
        <Button type="submit" text="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
