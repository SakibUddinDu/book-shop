import axios from "axios";
import { useEffect, useState } from "react";
import BookRow from "../../components/dashboard/BookRow";

function Booklist() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
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
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      if (window.confirm("Are you sure you want to delete this book?")) {
        setBooksData(booksData.filter(book => book.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete the book', error);
    }
  }

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
          {booksData.map((book) => (
            <BookRow key={book.id} book={book} onDelete={handleDelete}></BookRow>
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

