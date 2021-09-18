import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { customGridProps } from "../../constant";

const index = ({ text, times, key }: CustomGridProps) => {
    return (
    <ListItem key={key}>
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
