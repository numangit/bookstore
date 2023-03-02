import { createStore } from "redux";
import bookReducer from "./booksFeatures/bookReducer";

const store = createStore(bookReducer);

export default store;