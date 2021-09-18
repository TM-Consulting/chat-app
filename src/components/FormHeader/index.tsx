import Icon from "@material-ui/icons/LockRounded";
import pink from "@material-ui/core/colors/pink";

import { FormHeaderProps } from "./types";

const index = ({ title }: FormHeaderProps) => {
  return (
    <div>
      <Icon style={{ fontSize: 30, color: pink[500] }} />
      <h1>{title}</h1>
    </div>
  );
};

export default index;
