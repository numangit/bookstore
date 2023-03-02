import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentStatus } from '../../redux/filterFeature/actions';
import BookCard from "./BookCard";

const BookList = () => {

    const booksState = useSelector((state) => state.books);
    const filterState = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    //filter handler function
    const filterHandler = (selectedFiler) => {
        dispatch(currentStatus(selectedFiler));
    };

    //filter books data based on status
    const filterByStatus = (book) => {
        const { featured } = filterState
        if (featured) {
            return book.featured;
        } else {
            return book;
        }
    }

    return (
        <div className="order-2 xl:-order-1">

            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button
                        className={`filter-btn ${filterState.featured === false && "active-filter"}`}
                        id="lws-filterAll"
                        onClick={() => filterHandler(false)}
                    >
                        All
                    </button>

                    <button
                        className={`filter-btn ${filterState.featured === true && "active-filter"}`}
                        id="lws-filterFeatured"
                        onClick={() => filterHandler(true)}
                    >
                        Featured
                    </button>
                </div>
            </div>

            <div className="lws-bookContainer">
                {
                    booksState.filter(filterByStatus).map((book) => <BookCard key={book.id} book={book} />)
                }
            </div>

        </div>
    );
};

export default BookList;