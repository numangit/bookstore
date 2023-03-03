import { FETCHBOOKS, ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

export const loadBooks = (books) => {
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

export const editBook = (updatedData) => {
    return {
        type: UPDATEBOOK,
        payload: updatedData
    }
}

export const deleteBook = (bookId) => {
    return {
        type: DELETEBOOK,
        payload: bookId
    }
}