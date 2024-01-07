import React, { useMemo } from "react";
const InputBox = ({
  label,
  name,
  placeholder = "Enter...",
  value,
  onChange,
  required = false,
  errMsg = "",
  wrapperClassName = "",
  inputClassName = "",
  type = "text",
}) => {
  const isError = useMemo(() => {
    return errMsg.length > 0;
  }, [errMsg]);
  return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={isError ? `error-input ${inputClassName}` : inputClassName}
      />
  );
};
export default InputBox;
