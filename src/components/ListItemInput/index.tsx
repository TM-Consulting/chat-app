import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const index = ({ key, name, alt, src, primary, secondary, className }: ListItemInputProps) => {
    return (

        <ListItem button key={key}>
            <ListItemIcon>
                <Avatar alt={alt} src={src} />
            </ListItemIcon>
            <ListItemText primary={primary}>{name}</ListItemText>
            <ListItemText className={className} secondary={secondary} style={{textAlign:"right"}}></ListItemText>
            
        </ListItem>

    );
};

export default index;