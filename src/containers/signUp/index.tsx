import FormsContainer from "../common/FormsContainer";
import { componentTypes } from "../../components/IdentificationForms";
import { asideImageProps } from "./constants";

const index = () => (
  <FormsContainer {...asideImageProps} type={componentTypes.signUp.id} />
);

export default index;
