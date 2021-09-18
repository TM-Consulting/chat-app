import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { customGridProps } from "../../constant";
import { styles } from "../../constant";
import CustomGrid from "../../components/CustomGrid";
import { textAlign } from "@mui/system";
const useStyles = makeStyles({ ...styles });

const ChatBody = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={9}>
        <List className={classes.messageArea}>
        
            <CustomGrid {...customGridProps.default ,style={textAlign:"right"}}  />
         
            <CustomGrid {...customGridProps.firstmsg ,style={textAlign:"left"}} />
         
        </List>
        <Divider />
           </Grid>
    </div>
  );
};
export default ChatBody;
