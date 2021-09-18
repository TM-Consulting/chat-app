import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import ChatInput from "../../components/ChatInput";
import ChatBody from "../../containers/ChatBody";
import ListFriends from "../../containers/ListFriends";

const useStyles = makeStyles({
  parent: {
    marginTop: "5vh",
    padding: "1%",
  },
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "85vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chat = () => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <ListFriends />
        <Grid item xs={9}>
          <ChatBody />
          <Divider />
          <ChatInput onChange={() => {}} onClick={() => {}} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
