import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Styles from "../../styles/forms/index.module.css";
import FormHeader from "../FormHeader";

import { signUpDefaults } from "./constants";

const { title, fullname, email, password, confirm_password, button } = signUpDefaults;

const index = () => {
  return (
    <div className={Styles.form__wrapper}>
      <FormHeader title={title} />
      <form>
        <TextField {...fullname} />
        <TextField {...email} />
        <TextField {...password} />
        <TextField {...confirm_password} />
        <Button {...button}>{button.text}</Button>
        <div className={Styles.form__footer}>
          <Link to="/">You already have an account ?</Link>
        </div>
      </form>
    </div>
  );
};

export default index;
