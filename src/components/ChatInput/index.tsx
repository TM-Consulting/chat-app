import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

import SendIcon from "@material-ui/icons/Send";
import "./index.css";
import { chatInputProps } from "../../constants";

const index = ({
  styles,
  id,
  label,
  fullWidth,
  color,
  ariaLabel,
  onChange,
  onClick,
  value,
}: ChatInputProps) => {
  return (
      <Grid container style={{...styles.inputStyle }}>
        <Grid item xs={11}>
          <TextField id={id} label={label} fullWidth={fullWidth} onChange={onChange} value={value} />
        </Grid>
        <Grid xs={1} style={{ ...styles.buttonStyle }}>
          <Fab color={color} aria-label={ariaLabel} onClick={onClick} id={id} >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>

  );
};

index.defaultProps = {
  ...chatInputProps,
}

export default index;
