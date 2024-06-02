import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function BookRow({ book }) {
  const { name, thumbnail, price, author } = book;
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
      <th>
        <button className="btn btn-ghost">
          <FaRegEdit />
        </button>
        <button className="btn btn-ghost">
          <MdDelete />
        </button>
      </th>
    </tr>
  );
}

export default BookRow;
