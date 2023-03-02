import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from "./BookCard";

const BookList = () => {

    const booksState = useSelector((state) => state);

    const [active, setActive] = useState("All");

    //filter handler function
    const filterHandler = (selectedFiler) => {
        if (selectedFiler === "Featured") {
            setActive("Featured");
        } else {
            setActive("All");
        }
    };

    return (
        <div className="order-2 xl:-order-1">

            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button
                        className={`filter-btn ${active === "All" && "active-filter"}`}
                        id="lws-filterAll"
                        onClick={() => filterHandler("All")}
                    >
                        All
                    </button>

                    <button
                        className={`filter-btn ${active === "Featured" && "active-filter"}`}
                        id="lws-filterFeatured"
                        onClick={() => filterHandler("Featured")}
                    >
                        Featured
                    </button>
                </div>
            </div>

            <div className="lws-bookContainer">
                {
                    booksState.map((book) => <BookCard key={book.id} book={book} />)
                }
            </div>

        </div>
    );
};

export default BookList;