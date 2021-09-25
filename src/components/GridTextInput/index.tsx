import TextField from "@material-ui/core/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./index.css";
const index = ({
  className,
  ...rest
}: GridTextInputProps & OutlinedTextFieldProps) => {
  return (
    <Grid item xs={12} className={className}>
      <TextField {...rest} />
    </Grid>
  );
};
export default index;
