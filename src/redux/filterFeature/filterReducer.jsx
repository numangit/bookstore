import { filterState } from "./initialState";
import { SETSTATUS, SEARCHBOOK } from './actionType';

const filterReducer = (state = filterState, action) => {
    switch (action.type) {
        case SETSTATUS:
            return {
                ...state,
                featured: action.payload
            }

        case SEARCHBOOK:
            return {
                ...state,
                searchedBook: action.payload
            }

        default:
            return state;
    }
}

export default filterReducer;