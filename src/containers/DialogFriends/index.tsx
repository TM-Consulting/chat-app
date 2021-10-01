import ItemDialog from "../../components/ItemDialog";
import { customDialogProps } from "./constants";
import GridTextInput from "../../components/GridTextInput";
import { textFields } from "./constants";
import { createStructuredSelector } from "reselect";
import {
  makeSelectLoading,
  makeSelectOpenDialog,
  makeSelectUsers,
} from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import CustomDialog from "../../components/CustomDialog";
import "./index.css";
import { setOpenDialog } from "./actions";
import CustomProgress from "../../components/CustomProgress";
import { useEffect, useState } from "react";
import { User } from "../../types";
const DialogState = createStructuredSelector({
  open: makeSelectOpenDialog(),
  loading: makeSelectLoading(),
  users: makeSelectUsers(),
});
const DialogFriends = () => {
  const dispatch = useDispatch();
  const { open, loading, users } = useSelector(DialogState);

  const [usersList, setUsersList] = useState<User[] | null | undefined>(users);
  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleClose = () => {
    dispatch(setOpenDialog(false));
  };
  const handleChange = (e: any) => {
    if (!e.target.value) setUsersList(users);
    else
      setUsersList(
        users?.filter((item) => item.name.includes(e.target.value))
      );
  };
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
          onChange={handleChange}
        />
        <div className="users-list">
          {loading === true ? (
            <CustomProgress text="Loading friends" />
          ) : (
            usersList?.map((item: any) => (
              <ItemDialog key={item.name} primary={item.name} />
            ))
          )}
        </div>
      </div>
    </CustomDialog>
  );
};
export default DialogFriends;
