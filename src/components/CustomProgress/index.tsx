import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CircularProgressProps } from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  elem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginTop: theme.spacing(2),
    display: "inline-block",
  },
}));

const CustomProgress = ({
  text,
  ...circularProps
}: CustomProgressProps & CircularProgressProps) => {
  const { root, elem, text: textClass } = useStyles();

  return (
    <div className={root}>
      <div className={elem}>
        <CircularProgress {...circularProps} />
        <span className={textClass}>{text}</span>
      </div>
    </div>
  );
};

CustomProgress.defaultProps = {
  text: "Loading",
};
export default CustomProgress;
