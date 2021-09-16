import ListItemInput from "../../components/ListItemInput";
import List from '@material-ui/core/List';
import { listFriends, Friend } from "../../constants";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridTextInput from "../../components/GridTextInput";
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText } from "@material-ui/core";
const useStyles = makeStyles({
    chatSection: {
        width: '100%',
    height: '80vh'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0',
    },
    align: {
        textAlign: 'right',
    },
});
const ListFriends = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h5" className="header-message">Chat</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItemInput key={Friend.key} name={Friend.name} alt={Friend.alt} src={Friend.src} primary={Friend.primary} secondary={Friend.secondary} />
                </List>
                <GridTextInput />
                <List>
                    {listFriends.map((item) =>

                        <ListItemInput key={item.key} name={item.name} alt={item.alt} src={item.src} primary={item.primary} secondary={item.secondary} />

                    )}
                    
                </List>
            
        </Grid></Grid>
        </div>
    );
};
export default ListFriends;