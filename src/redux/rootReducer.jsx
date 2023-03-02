import { combineReducers } from "redux";
import filterReducer from "./filterFeature/filterReducer";
import bookReducer from "./booksFeatures/bookReducer";

const rootReducer = combineReducers({
    books: bookReducer,
    filter: filterReducer
})

export default rootReducer;