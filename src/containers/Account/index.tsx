import FormsContainer from "../common/FormsContainer";
import { asideImageProps } from "./constants";
import { ComponentProps } from "../../components/IdentificationForms/types";

const index = ({ type }: ComponentProps) => (
  <FormsContainer {...asideImageProps} type={type} />
);

export default index;
