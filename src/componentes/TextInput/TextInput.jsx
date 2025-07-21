

function TextInput({
  label,
  type = "text",
  placeholder = "Enter your input here",
  onChangeHandeler,
}) {
  return (
    <label>
      <span className="text-gray-700 text-2xl">{label}</span>
      <input
        type={type}
        className="px-4 py-2 border-gray-500 rounded-md w-full "
        placeholder={placeholder}
        onChange={onChangeHandeler}
      />
    </label>
  );
}

export default TextInput;
