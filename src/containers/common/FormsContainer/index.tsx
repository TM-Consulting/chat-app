import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import IdentificationForms from "../../../components/IdentificationForms";
import AsideImage from "../../../components/AsideImage";

import { FormsContainerProps } from "./types";
const FormContainer = ({
  imageURL,
  blurURL,
  alt,
  type,
  handleChange,
  handleSubmit
}: FormsContainerProps) => {
  return (
    <Container className="padding__none" maxWidth={false}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className="fluid__vh"
      >
        <Grid
          item
          md={7}
          sm={4}
          xs={false}
          className="overflow__hidden hide__onSm"
        >
          <AsideImage imageURL={imageURL} blurURL={blurURL} alt={alt} />
        </Grid>
        <Grid
          item
          md={5}
          sm={8}
          xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <IdentificationForms type={type} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormContainer;
