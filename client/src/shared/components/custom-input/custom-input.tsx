import React from "react";
import { CustomInputProps } from "./custom-input.types";
import style from "./custom-input.styles.module.css";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type,
  className,
  placeholder,
  onChange,
  readOnly,
  required,
  value,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={style["custom-input_label"]}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={`${style["custom-input"]} ${className}`}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

export default CustomInput;
