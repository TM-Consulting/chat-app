import { OutlinedTextFieldProps } from "@material-ui/core";

export interface InputTypes {
  title: string;
  email: OutlinedTextFieldProps;
  password: OutlinedTextFieldProps;
  checkbox: controlledFieldsTypes;
  button: controlledFieldsTypes;
}

export interface ControlledFieldsTypes {
  fullWidth?: boolean;
  label?: string;
  name?: string;
  text?: string;
  color: "primary" | "default" | "secondary" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  type?: "submit" | "button" | "reset" | undefined;
}
