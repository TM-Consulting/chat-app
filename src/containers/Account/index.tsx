import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";

import FormsContainer from "../common/FormsContainer";

import { ComponentProps } from "../../components/IdentificationForms/types";
import { AccountValue } from "../../constants";
import { makeSelectFormData } from "./selectors";
import { setFormData } from "./actions";

import {
  asideImageProps,
  FORM_FIELDS_ERROR,
  FORM_FIELDS_SUCCESS,
} from "./constants";

const authState = createStructuredSelector({
  formData: makeSelectFormData(),
});

const Account = ({ type }: ComponentProps) => {
  const { formData } = useSelector(authState);  
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (type === AccountValue.signIn) {
      formData.email == null || formData.password == null
        ? toast.error(FORM_FIELDS_ERROR)
        : toast.success(FORM_FIELDS_SUCCESS);
    }
    if (type === AccountValue.signUp) {
      Object.values(formData).some((val) => val === null)
        ? toast.error(FORM_FIELDS_ERROR)
        : toast.success(FORM_FIELDS_SUCCESS);
    }
  };

  return (
    <FormsContainer
      type={type}
      {...asideImageProps}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Account;
