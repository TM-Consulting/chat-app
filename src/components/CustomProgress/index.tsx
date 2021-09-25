import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CircularProgressProps } from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
const CustomProgress = ({
  text,
  ...circularProps
}: CustomProgressProps & CircularProgressProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress {...circularProps} />
      <span>{text}</span>
    </div>
  );
};

CustomProgress.defaultProps = {
  text: "Loading",
};
export default CustomProgress;
