import ListItemInput from "../../components/ListItemInput";
import List from "@material-ui/core/List";
import { listFriends, friend, styles } from "./constants";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import GridTextInput from "../../components/GridTextInput";
import { textFields } from "./constants";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({ ...styles });
const ListFriends = () => {
  const classes = useStyles();
  const handlechange = () => {};
  return (
    <Grid item xs={3} className={classes.borderRight500}>
      <List>
        <ListItemInput
          key={friend.key}
          name={friend.name}
          alt={friend.alt}
          src={friend.src}
          primary={friend.primary}
          secondary={friend.secondary}
        />
      </List>
      <Divider />
      <GridTextInput
        id={textFields.id}
        className={classes.padding}
        label={textFields.label}
        fullwidth={textFields.fullWidth}
        onchange={handlechange}
      />
      <Divider />
      <List>
        {listFriends.map((item) => (
          <ListItemInput
            style={{ textAlign: textFields.alignement }}
            key={item.key}
            name={item.name}
            alt={item.alt}
            src={item.src}
            primary={item.primary}
            secondary={item.secondary}
          />
        ))}
      </List>
    </Grid>
  );
};
export default ListFriends;
