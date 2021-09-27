import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { customAlertDefault } from "./constants";
import { customAlertProps } from "./types";
import { AlertProps } from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function CustomAlert({
  text = customAlertDefault.text,
  ...alertProps
}: customAlertProps & AlertProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert {...alertProps} >{text}</Alert>
    </div>
  );
}
