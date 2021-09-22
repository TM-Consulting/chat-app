import FormsContainer from "../common/FormsContainer";
import { asideImageProps } from "./constants";
import { ComponentProps } from "../../components/IdentificationForms/types";
import { createStructuredSelector } from "reselect";
import { makeSelectError, makeSelectErrorMessage } from "./selectors";
import { useSelector } from "react-redux";
const authState = createStructuredSelector({
  error: makeSelectError(),
  errorMessage: makeSelectErrorMessage(),
});
const Account = ({ type }: ComponentProps) => {
  const { error, errorMessage } = useSelector(authState);
  console.log("testtt", errorMessage);
  return <FormsContainer {...asideImageProps} type={type} />;
};

export default Account;
