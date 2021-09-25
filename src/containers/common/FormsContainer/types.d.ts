import { IdentificationTypes } from "../../../components/IdentificationForms";

export interface FormsContainerProps {
  imageURL: string;
  blurURL: string;
  alt: string;
  type: IdentificationTypes;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | any;
  handleSubmit?: (e: React.SyntheticEvent) => void | any;
};