import ItemDialog from "../../components/ItemDialog";
import { listFriends, customDialogProps } from "./constants";
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
  return (
    <CustomDialog
      ariaLabelledby={customDialogProps.ariaLabelledby}
      open={open}
      title={customDialogProps.title}
    >
      <div>
        <GridTextInput
          id={textFields.id}
          label={textFields.label}
          fullWidth={textFields.fullWidth}
          variant="outlined"
        />
        <div className="users-list">
          {listFriends.map((item: any) => (
            <ItemDialog key={item.name} primary={item.name} />
          ))}
        </div>
      </div>
    </CustomDialog>
  );
};
export default DialogFriends;
