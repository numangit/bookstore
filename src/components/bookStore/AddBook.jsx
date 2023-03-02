import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editToggle } from '../../redux/filterFeature/actions';

const AddBook = () => {

    const { status, bookData } = useSelector((state) => state.filter.editMode);
    const dispatch = useDispatch();

    //function to handle form
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editToggle(false, ''));
    }

    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form onSubmit={submitHandler} className="book-form">
                    <div className="space-y-2">
                        <label htmlFor="name">Book Name</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookname"
                            value={status ? bookData.name : ""}
                            name="name" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookauthor"
                            value={status ? bookData.author : ""}
                            name="author" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookthumbnail"
                            value={status ? bookData.thumbnail : ""}
                            name="thumbnail" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="price">Price</label>
                            <input
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookprice"
                                value={status ? bookData.price : ""}
                                name="price" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookrating"
                                value={status ? bookData.rating : ""}
                                name="rating"
                                min="1"
                                max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="input-Bookfeatured"
                            type="checkbox"
                            checked={status ? bookData.featured : false}
                            name="featured"
                            className="w-4 h-4" />
                        <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">{status ? "Update Book" : "Add Book"}</button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;