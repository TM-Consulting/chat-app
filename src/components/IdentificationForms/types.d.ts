import { OutlinedTextFieldProps } from "@material-ui/core";

export interface IdentificationProps {
  title: string;
  fullname?: OutlinedTextFieldProps;
  email: OutlinedTextFieldProps;
  password: OutlinedTextFieldProps;
  checkbox?: controlledFieldsTypes;
  confirm_password?: OutlinedTextFieldProps;
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

export declare type IdentificationTypes = "signIn" | "signUp";

export interface DefaultsProps {
  signIn: DefaultsPropsTypes;
  signUp: DefaultsPropsTypes;
}

export interface DefaultsPropsTypes {
  id: IdentificationTypes;
  defaultProps: IdentificationProps;
}

export interface ComponentProps {
  type: IdentificationTypes;
}
