import { InputTypes } from "./types";

export const signInDefaults: InputTypes = {
  title: "Sign In",
  email: {
    label: "Email *",
    placeholder: "Enter your email...",
    type: "email",
    name: "email",
    variant: "outlined",
    fullWidth: true,
  },
  password: {
    label: "Password *",
    placeholder: "Enter your password...",
    type: "password",
    name: "password",
    variant: "outlined",
    fullWidth: true,
  },
  checkbox: {
    label: "Remember me",
    name: "checkbox",
    color: "primary",
  },
  button: {
    type: "submit",
    text: "Submit",
    color: "primary",
    variant: "contained",
    fullWidth: true,
  },
};
