import Grid from "@material-ui/core/Grid";

import FluidGridContainer from "../common/FluidGridContainer";
import SignUpForm from "../../components/SignUpForm";
import AsideImage from "../../components/AsideImage";
import Styles from "../../styles/common/index.module.css";

import { asideImageProps } from "./constants";

const index = () => {
  return (
    <FluidGridContainer>
      <Grid
        item
        lg={7}
        md={4}
        sm={false}
        className={[Styles.overflow__hidden, Styles.hide__onSm].join(" ")}
      >
        <AsideImage {...asideImageProps} />
      </Grid>
      <Grid
        item
        lg={5}
        md={8}
        sm={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <SignUpForm />
      </Grid>
    </FluidGridContainer>
  );
};

export default index;
