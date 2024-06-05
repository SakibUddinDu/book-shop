import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function BookRow({ book, onDelete }) {
  const { _id, name, thumbnail, price, author } = book;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <p>{author}</p>
      </td>
      <td>{price}</td>
      <td>
        <Link to={`/dashboard/edit-book/${_id}`} className="btn btn-ghost">
          <FaRegEdit />
        </Link>
        <button onClick={() => onDelete(_id)} className="btn btn-ghost">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default BookRow;
