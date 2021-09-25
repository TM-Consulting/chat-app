import ItemDialog from "../../components/ItemDialog";
import { listFriends, customDialogProps } from "./constants";
import GridTextInput from "../../components/GridTextInput";
import { textFields } from "./constants";
import { createStructuredSelector } from "reselect";
import { makeSelectLoading, makeSelectOpenDialog } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import CustomDialog from "../../components/CustomDialog";
import "./index.css";
import { setOpenDialog } from "./actions";
import CustomProgress from "../../components/CustomProgress";
const DialogState = createStructuredSelector({
  open: makeSelectOpenDialog(),
  loading: makeSelectLoading(),
});


const DialogFriends = () => {
  const dispatch = useDispatch();
  const { open,loading } = useSelector(DialogState);
  const handleClose = () => {
    dispatch(setOpenDialog(false));
  }
  return (
    <CustomDialog
      ariaLabelledby={customDialogProps.ariaLabelledby}
      open={open}
      title={customDialogProps.title}
      onClose={handleClose}
    >
      <div>
        <GridTextInput
          id={textFields.id}
          label={textFields.label}
          fullWidth={textFields.fullWidth}
          variant="outlined"
        />
        <div className="users-list">
          {loading===true? (
            <CustomProgress />
          ):(
          listFriends.map((item: any) => (
            <ItemDialog key={item.name} primary={item.name} />
          )))}
        </div>
      </div>
    </CustomDialog>
  );
};
export default DialogFriends;
