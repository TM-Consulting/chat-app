import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { customGriddefault } from "./constants";
const index = ({ text, times, key, styles }: CustomGridProps) => {
  return (
    <ListItem key={key} style={{ ...styles }}>
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
index.defaultProps = {
  ...customGriddefault,
};
export default index;
