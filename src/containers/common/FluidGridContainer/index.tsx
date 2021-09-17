import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { FluidContainerProps } from "./types";

import Styles from "../../../styles/common/index.module.css";

const index = ({ children }: FluidContainerProps) => {
  return (
    <Container className={Styles.padding__none} maxWidth={false}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={Styles.fluid__vh}
      >
        {children}
      </Grid>
    </Container>
  );
};

export default index;
