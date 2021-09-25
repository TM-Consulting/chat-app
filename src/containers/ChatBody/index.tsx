import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import List from "@material-ui/core/List";

import CustomProgress from "../../components/CustomProgress";
import CustomGrid from "../../components/CustomGrid";
import { customGridProps } from "../../constants";
import { styles } from "../../constants";
import { makeSelectLoading } from "./selectors";

const useStyles = makeStyles({ ...styles });

const chatState = createStructuredSelector({
  loading: makeSelectLoading(),
});

const ChatBody = () => {
  const { loading } = useSelector(chatState);
  const { messageArea } = useStyles();

  return (
    <List className={messageArea}>
      {loading === true ? (
        <CustomProgress />
      ) : (
        customGridProps.map((item) => <CustomGrid {...item} />)
      )}
    </List>
  );
};
export default ChatBody;
