import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const index=()=>{
    return(
<Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
    )
};
export default index;