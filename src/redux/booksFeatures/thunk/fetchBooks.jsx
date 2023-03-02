import { loadBooks } from "../actions";

const fetchBooks = async (dispatch) => {
    const res = await fetch("http://localhost:9000/books");
    const booksData = await res.json();

    dispatch(loadBooks(booksData));
}

export default fetchBooks;