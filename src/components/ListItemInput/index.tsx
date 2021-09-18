import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const index = ({
  key,
  name,
  alt,
  src,
  primary,
  secondary,
  className,
  style,
}: ListItemInputProps) => {
  return (
    <ListItem button key={key}>
      <ListItemIcon>
        <Avatar alt={alt} src={src} />
      </ListItemIcon>
      <ListItemText primary={primary}>{name}</ListItemText>
      <ListItemText
        className={className}
        secondary={secondary}
        style={style}
      ></ListItemText>
    </ListItem>
  );
};

export default index;
