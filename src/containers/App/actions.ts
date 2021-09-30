import { ActionsTypes } from "./constants";
import { Page } from "./types";

const setCurrentPage = (page: Page) => {
  return {
    type: ActionsTypes.SET_CURRENT_PAGE,
    payload: page,
  };
};

export { setCurrentPage };
