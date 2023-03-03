import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBooks from '../../redux/booksFeatures/thunk/addBook';
import updateBook from '../../redux/booksFeatures/thunk/updateBook';
import { editToggle } from '../../redux/filterFeature/actions';

const AddBook = () => {

    const { status, bookData } = useSelector((state) => state.filter.editMode);
    const dispatch = useDispatch();

    //update book input
    const [editData, setEditData] = useState({
        name: '',
        author: '',
        thumbnail: '',
        price: '',
        rating: '',
        featured: false,
    });

    //useEffect to set edit data in a useState
    useEffect(() => {
        status && setEditData(bookData);
    }, [status]);

    //add book input
    const [input, setInput] = useState({
        name: '',
        author: '',
        thumbnail: '',
        price: '',
        rating: '',
        featured: false,
    })

    //function to handle form
    const submitHandler = (e) => {
        e.preventDefault();
        if (status) {
            dispatch(updateBook(editData))
            dispatch(editToggle(false, {}));
        } else {
            dispatch(addBooks(input));
            setInput({
                name: '',
                author: '',
                thumbnail: '',
                price: '',
                rating: '',
                featured: false,
            });
        }
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
                            value={status ? editData.name : input.name}
                            onChange={status
                                ? (e) => setEditData({ ...editData, name: e.target.value })
                                : (e) => setInput({ ...input, name: e.target.value })}
                            name="name" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookauthor"
                            value={status ? editData.author : input.author}
                            onChange={status
                                ? (e) => setEditData({ ...editData, author: e.target.value })
                                : (e) => setInput({ ...input, author: e.target.value })}
                            name="author" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookthumbnail"
                            value={status ? editData.thumbnail : input.thumbnail}
                            onChange={status
                                ? (e) => setEditData({ ...editData, thumbnail: e.target.value })
                                : (e) => setInput({ ...input, thumbnail: e.target.value })}
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
                                value={status ? editData.price : input.price}
                                onChange={status
                                    ? (e) => setEditData({ ...editData, price: parseInt(e.target.value) })
                                    : (e) => setInput({ ...input, price: parseInt(e.target.value) })}
                                name="price" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookrating"
                                value={status ? editData.rating : input.rating}
                                onChange={status
                                    ? (e) => setEditData({ ...editData, rating: parseInt(e.target.value) })
                                    : (e) => setInput({ ...input, rating: parseInt(e.target.value) })}
                                name="rating"
                                min="1"
                                max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="input-Bookfeatured"
                            type="checkbox"
                            checked={status ? editData.featured : input.featured}
                            onChange={status
                                ? (e) => setEditData({ ...editData, featured: e.target.checked })
                                : (e) => setInput({ ...input, featured: e.target.checked })}
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