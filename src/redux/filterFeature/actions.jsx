import { SETSTATUS, SEARCHBOOK } from './actionType';

export const currentStatus = (status) => {
    return {
        type: SETSTATUS,
        payload: status
    }
};

export const searchBook = (bookName) => {
    return {
        type: SEARCHBOOK,
        payload: bookName
    }
};
