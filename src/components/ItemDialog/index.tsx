import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";


const index = ({ onclick, key, className, primary }: CustomDialogProps) => {
  return (
    <ListItem button onClick={onclick} key={key}>
      <ListItemAvatar>
        <Avatar className={className}>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default index;
