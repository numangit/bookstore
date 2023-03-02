import React from 'react';
import BookCard from "./BookCard";

const BookList = () => {

    return (
        <div class="order-2 xl:-order-1">

            <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                    <button class="filter-btn active-filter" id="lws-filterAll">All</button>
                    <button class="filter-btn" id="lws-filterFeatured">Featured</button>
                </div>
            </div>

            <div class="lws-bookContainer">
                <BookCard />
            </div>

        </div>
    );
};

export default BookList;