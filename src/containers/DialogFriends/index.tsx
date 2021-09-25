import ItemDialog from "../../components/ItemDialog";
import { listFriends,customDialogProps} from "./constants";
import GridTextInput from "../../components/GridTextInput";
import { textFields } from "./constants";
import { createStructuredSelector } from "reselect";
import { makeSelectOpenDialog } from "./selectors";
import { useSelector } from "react-redux";
import CustomDialog from "../../components/CustomDialog";
import "./index.css";
const DialogState = createStructuredSelector({
    open: makeSelectOpenDialog(),
});
const DialogFriends = () => {

    const { open } = useSelector(DialogState);
    console.log("testtt", open);
    return (
        <CustomDialog ariaLabelledby={customDialogProps.ariaLabelledby} open={customDialogProps.open} title={customDialogProps.title}>
            <div>
                <GridTextInput
                    id={textFields.id}

                    label={textFields.label}
                    fullwidth={textFields.fullWidth}

                />
                {listFriends.map((item: any) => (
                    <ItemDialog key={item.name} primary={item.name} />
                ))}
            </div>
        </CustomDialog>
    );
}
export default DialogFriends;