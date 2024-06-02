import axios from "axios";
import { useEffect, useState } from "react";
import CategoryRow from './../../components/dashboard/CategoryRow';

function Categorylist() {

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        if (response.status === 200) {
          setCategoriesData(response.data); // Ensure you're setting the array of categories here
        }
      } catch (error) {
        console.error("Error fetching categories data:", error);
      }
    };
    loader();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Category Name</th>
            <th>Category Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoriesData.map((category, index)=><CategoryRow key={category.id} index={index} category={category}></CategoryRow>)
          }

         
         
        </tbody>
      </table>
    </div>
  );
}

export default Categorylist;
