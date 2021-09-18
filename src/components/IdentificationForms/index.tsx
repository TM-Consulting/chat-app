import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import FormHeader from "../FormHeader";
import { componentTypes } from "./constants";
import { ComponentProps, IdentificationTypes } from "./types";
import "./index.css";

const { signUp } = componentTypes;

const index = ({ type }: ComponentProps) => {
  const {
    title,
    fullname,
    email,
    password,
    confirm_password,
    checkbox,
    button,
  } = componentTypes[type].defaultProps;

  const isSignUp = type === signUp.id;

  return (
    <div className="form__wrapper">
      <FormHeader title={title} />
      <form>
        {isSignUp && <TextField {...fullname} />}
        <TextField {...email} />
        <TextField {...password} />
        {isSignUp && <TextField {...confirm_password} />}
        {!isSignUp && (
          <FormControlLabel
            control={<Checkbox {...checkbox} />}
            label={checkbox.label}
          />
        )}
        <Button {...button}>{button.text}</Button>
        {isSignUp ? (
          <div className="form__footer">
            <Link to="/">You already have an account ?</Link>
          </div>
        ) : (
          <div className="form__footer">
            <Link to="/sign-up">You don't have an account ?</Link>
          </div>
        )}
      </form>
    </div>
  );
};

export { componentTypes };
export type { IdentificationTypes }

export default index;
