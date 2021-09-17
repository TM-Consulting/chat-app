import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { customGridProps } from "../../constant";
const useStyles = makeStyles({
  align: { textAlign: "right" },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});
const classes = useStyles();  return (
    <ListItem key="1">
      <Grid container>
        <Grid item xs={12}>
          <ListItemText primary={text}></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText secondary={times}></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
};
export default index;
