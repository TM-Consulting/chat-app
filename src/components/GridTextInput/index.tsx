import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./index.css";
const index = ({
  id,
  label,
  fullwidth,
  className,
  onchange,
}: GridTextInputProps) => {
  return (
    <Grid item xs={12} className={className}>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        fullWidth={fullwidth}
        onChange={onchange}
      />
    </Grid>
  );
};
export default index;
