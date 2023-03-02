import React, { useState } from 'react';
import BookCard from "./BookCard";

const BookList = () => {

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
        <div class="order-2 xl:-order-1">

            <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                    <button
                        class={`filter-btn ${active === "All" && "active-filter"}`}
                        id="lws-filterAll"
                        onClick={() => filterHandler("All")}
                    >
                        All
                    </button>

                    <button
                        class={`filter-btn ${active === "Featured" && "active-filter"}`}
                        id="lws-filterFeatured"
                        onClick={() => filterHandler("Featured")}
                    >
                        Featured
                    </button>
                </div>
            </div>

            <div class="lws-bookContainer">
                <BookCard />
            </div>

        </div>
    );
};

export default BookList;