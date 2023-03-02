import { FETCHBOOKS, ADDBOOK, FEATUREDBOOK, SEARCHBOOK, UPDATEBOOK, DELETEBOOK } from "./actions";

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
export const featuredBook = () => {
    return {
        type: FEATUREDBOOK
    }
}

export const searchBook = (bookName) => {
    return {
        type: SEARCHBOOK,
        payload: bookName
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