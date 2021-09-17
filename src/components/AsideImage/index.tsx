import ProgressiveImage from "react-progressive-graceful-image";

import { AsideImageProps, SourceURL } from "./types";
import Styles from "../../styles/common/index.module.css";

const index = ({ imageURL, blurURL, alt }: AsideImageProps) => (
  <ProgressiveImage src={imageURL} placeholder={blurURL}>
    {(src: SourceURL , loading: boolean) => (
      <img
        className={[
          Styles.fluid__ph,
          Styles.fluid__pw,
          Styles.image__cover,
          loading ? Styles.blur__in : Styles.blur__out
        ].join(" ")}
        src={src}
        alt={alt}
      />
    )}
  </ProgressiveImage>
);

export default index;
