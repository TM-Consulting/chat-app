import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {CustomButtonProps} from "./types";
import AddIcon from '@material-ui/icons/Add';

const index=({color,text,startIcon,className,onClick}:CustomButtonProps)=> {
 
  return (
    
     
      <Button
        variant="contained"
        color={color}
        startIcon={startIcon} 
        className={className}
        onClick={onClick}
      >
        {text}
         
      </Button>
      
    
  );
}
export default index;
