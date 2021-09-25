export const listFriends = [
  {
    key: "RemySharp",
    name: "Remy Sharp",
    alt: "Remy Sharp",
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    primary: "Remy Sharp",
    secondary: "online",
  },
  {
    key: "Alice",
    name: "Alice",
    alt: "Alice",
    src: "https://material-ui.com/static/images/avatar/3.jpg",
    primary: "Alice",
    secondary: "",
  },
  {
    key: "CindyBaker",
    name: "Cindy Baker",
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
    primary: "Cindy Baker",
    secondary: "online",
  },
  {
    key: "CindyBaker",
    name: "Cindy Baker",
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
    primary: "Cindy Baker",
    secondary: "online",
  },
  {
    key: "CindyBaker",
    name: "Cindy Baker",
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
    primary: "Cindy Baker",
    secondary: "online",
  },
  {
    key: "CindyBaker",
    name: "Cindy Baker",
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
    primary: "Cindy Baker",
    secondary: "online",
  },
];

export const friend = {
  key: "RemySharp",
  name: "",
  alt: "RemySharp",
  src: "https://material-ui.com/static/images/avatar/1.jpg",
  primary: "John Wick",
  secondary: "",
};
export const styles = {
  chatSection: {
    width: "100%",
    height: "100vh",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  padding: {
    padding: "10px",
  },
  centrer: {
    marginLeft: "100px",
    marginTop: "50px",
  },
};
export const textFields = {
  id: "outlined-basic-email",
  label: "Search",
  variant: "outlined",
  fullWidth: true,
  className: "gridstyle",
  alignement: "right",
};

export enum ActionsTypes {
  SET_CURRENT_FRIEND = "SET_CURRENT_FRIEND",
  REQUEST_FRIENDS_LIST = "REQUEST_FRIENDS_LIST",
  REQUEST_FRIENDS_LIST_SUCCESS = "REQUEST_FRIENDS_LIST_SUCCESS",
  REQUEST_FRIENDS_LIST_ERROR = "REQUEST_FRIENDS_LIST_ERROR",
}
export const customButtonProps = {
  color: '"inherit" | "primary" | "secondary" | "default" | undefined',
  text: "add friend",
};
