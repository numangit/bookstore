import { SETSTATUS, SEARCHBOOK, EDITTOGGLE } from './actionType';

export const currentStatus = (status) => {
    return {
        type: SETSTATUS,
        payload: status
    }
};

export const editToggle = (value, data) => {
    return {
        type: EDITTOGGLE,
        payload: {
            status: value,
            bookData: data
        }
    }
};

export const searchBook = (bookName) => {
    return {
        type: SEARCHBOOK,
        payload: bookName
    }
};
