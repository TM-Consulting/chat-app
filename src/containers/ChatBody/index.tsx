import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { customGridProps } from "../../constant";
import CustomGrid from "../../components/CustomGrid";
const useStyles = makeStyles({
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});
const index = () => {
 const classes = useStyles();
  return (
    <div>
      <Grid item xs={9}>
        <List className={classes.messageArea}>
          <ListItem key="1">
            <CustomGrid {...customGridProps.default}/>
          </ListItem>
          <ListItem key="2">
            <CustomGrid {...customGridProps.firstmsg} />
          </ListItem>
        </List>
        

        <Divider />
          <CustomGrid{...customGridProps.secondmsg}/>
        </Grid>

    </div>
  )};
export default index;
