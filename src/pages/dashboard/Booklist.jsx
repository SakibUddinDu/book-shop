import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BookRow from "../../components/dashboard/BookRow";

function Booklist() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const response = await axios.get("https://bookshop-backend-x3im.onrender.com/books");
        if (response.status === 200) {
          setBooksData(response.data); // Ensure you're setting the array of books here
        }
      } catch (error) {
        console.error("Error fetching books data:", error);
      }
    };
    loader();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`https://bookshop-backend-x3im.onrender.com/books/${id}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      if (window.confirm("Are you sure you want to delete this book?")) {
        setBooksData(booksData?.filter((book) => book._id !== id));
        toast.success("You deleted the book Successfully");
      }
    } catch (error) {
      console.error("Failed to delete the book", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl">Books List</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th className="ml-12">Action</th>
          </tr>
        </thead>
        <tbody>
          {booksData?.map((book) => (
            <BookRow
              key={book._id}
              book={book}
              onDelete={handleDelete}
            ></BookRow>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th className="ml-12">Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Booklist;
