import ListItemInput from "../../components/ListItemInput";
import List from "@material-ui/core/List";
import { listFriends, friend, styles } from "./constants";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import GridTextInput from "../../components/GridTextInput";
import { textFields, customButtonProps } from "./constants";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "../../components/CustomButton";
import AddIcon from '@material-ui/icons/Add';
import DialogFriends from "../DialogFriends";
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from "react-redux";
 const useStyles = makeStyles({ ...styles });
const ListFriends = () => {
  const classes = useStyles();
  const open=true;

  const handlechange = () => { 
    return ;
  };
  const handleclick = () => {};
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
      <List style={{ height: "45vh", overflowY: "scroll" }}>
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
     
        <CustomButton className={classes.centrer} text={customButtonProps.text} color={customButtonProps.color} startIcon={<AddIcon />} onClick={handleclick}></CustomButton>
        <DialogFriends/>
    </Grid>

  );
};
export default ListFriends;
