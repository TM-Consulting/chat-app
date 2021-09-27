import Dialog from '@material-ui/core/Dialog';
import { CustomDialogState } from "./types";
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogProps } from '@material-ui/core/Dialog';

const index = ({ children, ariaLabelledby, open, title, ...dialogProps }: CustomDialogState & DialogProps) => {

    return (
        <Dialog aria-labelledby={ariaLabelledby} open={open} {...dialogProps} >
            <DialogTitle>{title}</DialogTitle>

            {children}

        </Dialog>
    );
}
export default index;