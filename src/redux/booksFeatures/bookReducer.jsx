import { booksState } from "./initialState";
import { FETCHBOOKS, ADDBOOK, ALLBOOK, FEATUREDBOOK, SEARCHBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

const bookReducer = (state = booksState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return console.log("FETCHBOOKS");
        case ADDBOOK:
            return console.log("ADDBOOK");
        case ALLBOOK:
            return console.log("ALLBOOK");
        case FEATUREDBOOK:
            return console.log("FEATUREDBOOK");
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