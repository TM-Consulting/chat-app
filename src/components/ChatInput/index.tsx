import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import { chatInputProps } from "../../constants";

const index = ({
  styles,
  color,
  ariaLabel,
  onClick,
  ...textFieldProps
}: ChatInputProps & StandardTextFieldProps) => {
  return (
    <Grid container style={{ ...styles.inputStyle }}>
      <Grid item xs={11}>
        <TextField {...textFieldProps} />
      </Grid>
      <Grid xs={1} style={{ ...styles.buttonStyle }}>
        <Fab color={color} aria-label={ariaLabel} onClick={onClick}>
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

index.defaultProps = {
  ...chatInputProps,
};

export default index;
