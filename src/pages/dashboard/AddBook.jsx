
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/books', formData)
      setFormData({
        name: "",
        author: "",
        thumbnail: "",
        price: 0,
        rating: 0,
        featured: false,
      });
      navigate("/");
      toast.success("Book created Successfully!", { autoClose: 3000 });
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("Oops! An error occurred. Please try again later.");
    }
  };


  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="lws-bookName">Book Name</label>
              <input
                required
                onChange={handleChange}
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-author">Author</label>
              <input
                required
                onChange={handleChange}
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-thumbnail">Image Url</label>
              <input
                required
                onChange={handleChange}
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price">Price</label>
                <input
                  required
                  onChange={handleChange}
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-rating">Rating</label>
                <input
                  required
                  onChange={handleChange}
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                onChange={handleChange}
                checked={formData.featured}
              />
              <label htmlFor="lws-featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddBook;

