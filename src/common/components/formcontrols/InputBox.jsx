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
    <div className={wrapperClassName}>
      <label htmlFor={wrapperClassName}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={isError ? `error-input ${inputClassName}` : inputClassName}
      />
      {isError > 0 && <p>{errMsg}</p>}
    </div>
  );
};
export default InputBox;
