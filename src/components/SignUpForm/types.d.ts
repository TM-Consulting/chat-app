import { OutlinedTextFieldProps } from "@material-ui/core";

export interface InputTypes {
  title: string;
  fullname: OutlinedTextFieldProps;
  email: OutlinedTextFieldProps;
  password: OutlinedTextFieldProps;
  confirm_password: OutlinedTextFieldProps;
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
