import { editBook } from '../actions';

const updateBook = (updateData, id) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ ...updateData }),
            header: {
                "content-type": "application/json charset=UTF-8"
            }
        })
        const updatedBook = await response.json();
        dispatch(editBook(updatedBook, id));
    }
};

export default updateBook;