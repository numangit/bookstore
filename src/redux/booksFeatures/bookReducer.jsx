import { booksState } from "./initialState";
import { FETCHBOOKS, ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

const generateId = (arrayData) => {
    const maxId = arrayData.reduce((maxId, product) => Math.max(product.id, maxId), 0);
    return maxId + 1;
};

const bookReducer = (state = booksState, action) => {
    switch (action.type) {
        case FETCHBOOKS:
            return action.payload;

        case ADDBOOK:
            return [
                ...state,
                {
                    ...action.payload,
                    id: generateId(state),
                }
            ];

        case UPDATEBOOK:
            return state.map((book) => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        name: action.payload.updatedData.name,
                        author: action.payload.updatedData.author,
                        thumbnail: action.payload.updatedData.thumbnail,
                        price: action.payload.updatedData.price,
                        rating: action.payload.updatedData.rating,
                        featured: action.payload.updatedData.featured,
                    };
                } else {
                    return book;
                };
            });

        case DELETEBOOK:
            return state.filter((book) => book.id !== action.payload);

        default:
            return state;
    }
};

export default bookReducer;