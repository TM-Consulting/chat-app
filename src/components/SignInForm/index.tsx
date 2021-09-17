import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Styles from "../../styles/forms/index.module.css";
import FormHeader from "../FormHeader";

import { signInDefaults } from "./constants";

const { title, email, password, checkbox, button } = signInDefaults;

const index = () => {
  return (
    <div className={Styles.form__wrapper}>
      <FormHeader title={title} />
      <form>
        <TextField {...email} />
        <TextField {...password} />
        <FormControlLabel
          control={<Checkbox {...checkbox} />}
          label={checkbox.label}
        />
        <Button {...button}>{button.text}</Button>
        <div className={Styles.form__footer}>
          <Link to="/sign-up">You don't have an account ?</Link>
        </div>
      </form>
    </div>
  );
};

export default index;
