import { ChangeEvent } from "react";
import { types } from "util";

export enum CustomInputTypes {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  NUMBER = "number",
}

export interface CustomInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  type: CustomInputTypes;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  className?: string;
  required?: boolean;
}
