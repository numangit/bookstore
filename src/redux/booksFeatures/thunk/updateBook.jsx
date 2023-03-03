import { editBook } from '../actions';

const updateBook = (updateData) => {
    const { id } = updateData;
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ ...updateData }),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        const updatedBook = await response.json();
        dispatch(editBook(updatedBook));
    }
};

export default updateBook;