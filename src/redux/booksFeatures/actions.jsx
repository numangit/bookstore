import { FETCHBOOKS, ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

export const loadBooks = (books) => {
    console.log(books);
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

export const updateBook = (updateData, id) => {
    return {
        type: UPDATEBOOK,
        payload: { updateData, id }
    }
}

export const deleteBook = (bookId) => {
    return {
        type: DELETEBOOK,
        payload: bookId
    }
}