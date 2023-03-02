import { filterState } from "./initialState";
import { SETSTATUS, SEARCHBOOK, EDITTOGGLE } from './actionType';

const filterReducer = (state = filterState, action) => {
    switch (action.type) {
        case SETSTATUS:
            return {
                ...state,
                featured: action.payload
            };

        case EDITTOGGLE:
            return {
                ...state,
                editMode: {
                    ...state.editMode,
                    status: action.payload.status,
                    bookData: action.payload.bookData
                }
            };

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