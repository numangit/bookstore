import { addBook } from "../actions";

const addBooks = (bookData) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/books',
            {
                method: 'POST',
                body: JSON.stringify({ ...bookData }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                }
            });

        const book = await response.json();
        dispatch(addBook(book));
    }
}

export default addBooks;