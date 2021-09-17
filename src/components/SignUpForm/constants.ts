import { InputTypes } from "./types";

export const signUpDefaults: InputTypes = {
  title: "Sign Up",
  fullname: {
    label: "Full Name *",
    placeholder: "Enter your fullname...",
    type: "name",
    name: "name",
    variant: "outlined",
    fullWidth: true
  },
  email: {
    label: "Email Address *",
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
  confirm_password: {
    label: "Confirm password *",
    placeholder: "Confirm your password...",
    type: "password",
    name: "password",
    variant: "outlined",
    fullWidth: true,
  },
  button: {
    type: "submit",
    text: "Submit",
    color: "primary",
    variant: "contained",
    fullWidth: true,
  },
};
