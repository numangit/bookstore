import { booksState } from "./initialState";
import { FETCHBOOKS, ADDBOOK, SEARCHBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

const bookReducer = (state = booksState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return console.log("FETCHBOOKS");
        case ADDBOOK:
            return console.log("ADDBOOK");
        case SEARCHBOOK:
            return console.log("SEARCHBOOK");
        case UPDATEBOOK:
            return console.log("UPDATEBOOK");
        case DELETEBOOK:
            return console.log("DELETEBOOK");
        default:
            return state;
    }
};

export default bookReducer;