import ProgressiveImage from "react-progressive-graceful-image";

import { AsideImageProps, SourceURL } from "./types";

const index = ({ imageURL, blurURL, alt }: AsideImageProps) => (
  <ProgressiveImage src={imageURL} placeholder={blurURL}>
    {(src: SourceURL, loading: boolean) => (
      <img
        className={`fluid__ph fluid__pw image__cover ${
          loading ? "blur__in" : "blur__out"
        }`}
        src={src}
        alt={alt}
      />
    )}
  </ProgressiveImage>
);

export default index;
