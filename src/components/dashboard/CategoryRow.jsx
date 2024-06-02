import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
function CategoryRow({ category, index }) {
  const { name, description } = category;

  return (
    <tr>
      <th>{index+1}</th>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-ghost">
          <FaRegEdit />
        </button>
        <button className="btn btn-ghost">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default CategoryRow;
