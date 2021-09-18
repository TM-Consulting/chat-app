import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { customGridProps } from "../../constant";
import { styles } from "../../constant";
import CustomGrid from "../../components/CustomGrid";
const useStyles = makeStyles({ ...styles });

const ChatBody = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={9}>
        <List className={classes.messageArea}>
          {customGridProps.map((item) => (
            <CustomGrid {...item} />
          ))}
        </List>
        <Divider />
      </Grid>
    </div>
  );
};
export default ChatBody;
