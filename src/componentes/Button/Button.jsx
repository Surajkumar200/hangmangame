
import getMyButtonStyle from "./getButtonStyle.js";

const Button = ({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`text-white p-2  rounded-md cursor-pointer ${getMyButtonStyle(
        styleType
      )} `}
    >
      {text}
    </button>
  );
};

export default Button;
