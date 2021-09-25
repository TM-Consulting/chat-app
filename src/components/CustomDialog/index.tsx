import Dialog from '@material-ui/core/Dialog';
import "./index.css";
import { CustomDialogState } from "./types";
import DialogTitle from '@material-ui/core/DialogTitle';

const index = ({ children, ariaLabelledby, open,title }: CustomDialogState) => {

    return (
        <Dialog aria-labelledby={ariaLabelledby} open={open}>
            <DialogTitle>{title}</DialogTitle>

            {children}

        </Dialog>
    );
}
export default index;