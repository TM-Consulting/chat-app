import { Routes } from "./constants";
interface AppState {
  currentPage: Page;
}

type Page = Routes.CHAT | Routes.SIGN_UP | Routes.SIGN_IN;

export { AppState, Page };
