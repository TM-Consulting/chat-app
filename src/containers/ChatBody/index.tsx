import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { customGridProps } from "../../constants";
import { styles } from "../../constants";
import CustomGrid from "../../components/CustomGrid";
const useStyles = makeStyles({ ...styles });

const ChatBody = () => {
  const classes = useStyles();
  return (
    <List className={classes.messageArea}>
      {customGridProps.map((item) => (
        <CustomGrid {...item} />
      ))}
    </List>
  );
};
export default ChatBody;
