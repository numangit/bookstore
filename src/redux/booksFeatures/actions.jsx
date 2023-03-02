import { FETCHBOOKS, ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actions";

export const fetchBooks = (books) => {
    return {
        type: FETCHBOOKS,
        payload: books
    }
}

export const addBook = (bookData) => {
    return {
        type: ADDBOOK,
        payload: bookData
    }
}

export const updateBook = (updateData) => {
    return {
        type: UPDATEBOOK,
        payload: updateData
    }
}

export const deleteBook = (bookId) => {
    return {
        type: DELETEBOOK,
        payload: bookId
    }
}