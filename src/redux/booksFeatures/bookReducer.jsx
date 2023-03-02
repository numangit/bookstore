import { booksState } from "./initialState";
import { FETCHBOOKS, ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

const bookReducer = (state = booksState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return console.log("FETCHBOOKS");

        case ADDBOOK:
            return console.log("ADDBOOK");

        case UPDATEBOOK:
            return console.log("UPDATEBOOK");

        case DELETEBOOK:
            return state.filter((book) => book.id !== action.payload);

        default:
            return state;
    }
};

export default bookReducer;